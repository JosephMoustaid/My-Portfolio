'use client';

import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);
    const [inner, setInner] = useState({ x: 0, y: 0 });
    const [outer, setOuter] = useState({ x: 0, y: 0 });
    const raf = useRef<number>();

    // Hide the native cursor
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `body, * { cursor: none !important; }`;
        document.head.appendChild(style);
        return () => { document.head.removeChild(style); };
    }, []);

    // Track mouse position
    useEffect(() => {
        const move = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    // Animate outer circle with latency
    useEffect(() => {
        const animate = () => {
            setOuter(prev => ({
                x: prev.x + (mouse.x - prev.x) * 0.15,
                y: prev.y + (mouse.y - prev.y) * 0.15,
            }));
            setInner(mouse);
            raf.current = requestAnimationFrame(animate);
        };
        raf.current = requestAnimationFrame(animate);
        return () => raf.current && cancelAnimationFrame(raf.current);
    }, [mouse]);

    // Hover effect
    useEffect(() => {
        const handleEnter = () => setHovering(true);
        const handleLeave = () => setHovering(false);
        const hoverables = document.querySelectorAll('a, button, .hoverable');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', handleEnter);
            el.addEventListener('mouseleave', handleLeave);
        });
        return () => {
            hoverables.forEach(el => {
                el.removeEventListener('mouseenter', handleEnter);
                el.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    return (
        <>
            {/* Outer Circle */}
            <div
                className={`fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border transition-all duration-200
                    ${hovering ? 'border-blue-400 scale-150' : 'border-white scale-100'}`}
                style={{
                    width: 40,
                    height: 40,
                    transform: `translate3d(${outer.x - 20}px, ${outer.y - 20}px, 0) scale(${hovering ? 1.5 : 1})`,
                    transition: 'border-color 0.2s, background 0.2s',
                }}
            />
            {/* Inner Circle */}
            <div
                className={`fixed top-0 left-0 z-[9999] pointer-events-none rounded-full transition-all duration-100
                    ${hovering ? 'bg-blue-400 scale-125' : 'bg-white scale-100'}`}
                style={{
                    width: 8,
                    height: 8,
                    transform: `translate3d(${inner.x - 4}px, ${inner.y - 4}px, 0) scale(${hovering ? 1.25 : 1})`,
                    transition: 'background 0.1s',
                }}
            />
        </>
    );
}