#!/usr/bin/env bash
# compress-and-webp.sh
# Mirrors SRC -> DST (preserves folder tree), compresses JPEG/PNG inside DST,
# and produces .webp files alongside images (e.g. image.jpg -> image.webp).
#
# Requires: jpegoptim, pngquant, optipng, cwebp (package: webp), rsync
#
# Install deps on Ubuntu:
# sudo apt update
# sudo apt install -y jpegoptim pngquant optipng webp rsync

set -euo pipefail

# --- CONFIG ---
SRC="public/projectPreviews"   # source originals (DO NOT overwrite)
DST="public/projectPreviewsCompressed"              # destination compressed copies
JPG_QUALITY=85                            # jpegoptim --max
WEBP_QUALITY=75                           # cwebp -q
PNGQUANT_QUALITY="65-85"                  # pngquant quality range
# ----------------

# Quick safety checks
if [ ! -d "$SRC" ]; then
  echo "ERROR: Source directory does not exist: $SRC"
  exit 1
fi

# Check required commands
missing=()
for cmd in rsync jpegoptim pngquant optipng cwebp; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    missing+=("$cmd")
  fi
done
if [ ${#missing[@]} -ne 0 ]; then
  echo "ERROR: Missing required commands: ${missing[*]}"
  echo "Install with: sudo apt update && sudo apt install -y jpegoptim pngquant optipng webp rsync"
  exit 2
fi

echo "Creating destination tree and copying files..."
mkdir -p "$DST"

# Mirror directory structure (folders only)
rsync -a --include '*/' --exclude '*' "$SRC/" "$DST/"

# Copy all files (preserve names)
rsync -a --progress "$SRC/" "$DST/"

echo "Compressing JPEG/JPG files with jpegoptim (quality max=${JPG_QUALITY})..."
# Use find + while read to handle weird filenames/spaces
find "$DST" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -print0 |
  while IFS= read -r -d '' img; do
    # jpegoptim will skip if already optimized; keep progressive and strip metadata
    jpegoptim --strip-all --all-progressive --max="$JPG_QUALITY" "$img" >/dev/null 2>&1 || \
      echo "jpegoptim failed for: $img"
  done

echo "Compressing PNG files with pngquant (lossy) then optipng (extra lossless pass)..."
find "$DST" -type f -iname '*.png' -print0 |
  while IFS= read -r -d '' img; do
    # pngquant will create a smaller file with same name when --force --ext .png used
    if ! pngquant --quality="$PNGQUANT_QUALITY" --speed 1 --force --ext .png "$img" >/dev/null 2>&1; then
      echo "pngquant failed for: $img"
      continue
    fi
    # run optipng for small additional savings
    if ! optipng -o2 "$img" >/dev/null 2>&1; then
      echo "optipng failed for: $img"
    fi
  done

echo "Generating .webp sidecar files (quality=${WEBP_QUALITY})..."
# Create .webp named image.webp (no double extension)
find "$DST" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0 |
  while IFS= read -r -d '' img; do
    out="${img%.*}.webp"
    if ! cwebp -q "$WEBP_QUALITY" "$img" -o "$out" >/dev/null 2>&1; then
      echo "cwebp failed for: $img"
    fi
  done

echo "Done. Summary:"
echo "- Source dir:"
du -sh "$SRC" || true
echo "- Destination dir:"
du -sh "$DST" || true

# Optional: show counts
jpg_count=$(find "$DST" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) | wc -l)
png_count=$(find "$DST" -type f -iname '*.png' | wc -l)
webp_count=$(find "$DST" -type f -iname '*.webp' | wc -l)
echo "- Files in DST: JPG=${jpg_count}, PNG=${png_count}, WEBP=${webp_count}"
echo ""
echo "Notes:"
echo "• This script preserves your originals in $SRC. If you want to overwrite originals, change SRC/DST or rsync flags."
echo "• To serve WebP in browsers, use <picture> or nginx rules to prefer .webp when accepted. Ask me if you want the nginx snippet."
