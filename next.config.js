/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images : {
    unoptimized : true ,
  }
  // Optional: basePath or assetPrefix if hosting on subpath
};

module.exports = nextConfig;