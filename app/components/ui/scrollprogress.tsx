'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        // Total height of the entire document minus the visible screen height
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        if (totalHeight > 0) {
            // Calculate percentage scrolled
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        }
        };

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);
        
        // Clean up event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-100">
        <div
            className="h-full bg-(--text) rounded-4xl transition-all duration-75 ease-out"
            style={{ width: `${scrollProgress}%` }}
        />
        </div>
    );
}