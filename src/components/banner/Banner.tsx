'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface BannerProps {
    imageList: string[]
}


const Banner: React.FC<BannerProps> = ({ imageList }) => {
    const [activeBanner, setActiveBanner] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    function getImage(index: number) {
        return (
            <Image src={`/banner/${imageList[index]}`} width={400} height={400} alt="banner" className="w-full" />
        )
    };

    useEffect(() => {
        startInterval()

        return () => stopInterval();
    }, [imageList.length]);

    function startInterval() {
        stopInterval()
        intervalRef.current = setInterval(() => {
            setActiveBanner((current) => (current + 1) % imageList.length);
        }, 3000);
    }

    function stopInterval() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    function handleCircleClick(index: number) {
        stopInterval();
        setActiveBanner(index);
        startInterval();
    }


    function getRoundCircle(activeBanner: number, index: number) {
        return (
            <div
                key={index} onClick={() => handleCircleClick(index)}
                className={`rounded-full w-4 h-4 m-1 ${activeBanner == index ? "bg-gray-500" : "bg-white"} cursor-pointer`}>
            </div>
        );
    }

    return (
        <div className="my-6 transition relative">
            {getImage(activeBanner)}
            <div className="flex absolute bottom-4 left-[43%] z-5">
                {imageList.map((_, index) => getRoundCircle(activeBanner, index))}
            </div>
        </div>
    );
}

export default Banner;