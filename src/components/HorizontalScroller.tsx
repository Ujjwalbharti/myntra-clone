'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

interface HorizontalScrollerProps {
    imageList: string[];
}

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({ imageList }) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // Function to check scroll boundaries
    const updateScrollState = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    // Scroll the container to the left
    const scrollLeft = () => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            scrollRef.current.scrollBy({ left: -clientWidth, behavior: 'smooth' });
        }
    };

    // Scroll the container to the right
    const scrollRight = () => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        updateScrollState(); // Check scroll state on mount
        const handleResize = () => updateScrollState(); // Update on window resize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.addEventListener('scroll', updateScrollState);
        }
        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener('scroll', updateScrollState);
            }
        };
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Left Button */}
            <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 ${canScrollLeft ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
                    }`}
            >
                &lt;
            </button>

            {/* Image Container */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth"
                style={{ scrollBehavior: 'smooth' }}
            >
                {imageList.map((src, index) => (
                    <div key={index} className="flex-shrink-0">
                        <Image
                            src={`/banner/${src}`}
                            alt={`Image ${index + 1}`}
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </div>

            {/* Right Button */}
            <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 ${canScrollRight ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
                    }`}
            >
                &gt;
            </button>
        </div>
    );
};

export default HorizontalScroller;
