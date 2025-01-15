'use client';

import Image from 'next/image';
import React from 'react';
import { useEffect, useRef, useState } from 'react';

interface BannerProps {
   imageList: string[];
}

const Banner: React.FC<BannerProps> = ({ imageList }) => {
   const [activeBanner, setActiveBanner] = useState(0);
   const intervalRef = useRef<NodeJS.Timeout | null>(null);

   function getImage(index: number) {
      return (
         <Image
            src={`/banner/${imageList[index]}`}
            width={400}
            height={400}
            alt="banner"
            className="w-full"
         />
      );
   }

   const stopInterval = React.useCallback(() => {
      if (intervalRef.current) {
         clearInterval(intervalRef.current);
         intervalRef.current = null;
      }
   }, []);

   const startInterval = React.useCallback(() => {
      stopInterval();
      intervalRef.current = setInterval(() => {
         setActiveBanner((current) => (current + 1) % imageList.length);
      }, 3000);
   }, [imageList.length, stopInterval, setActiveBanner]);

   useEffect(() => {
      startInterval();

      return () => stopInterval();
   }, [imageList.length, startInterval, stopInterval]);

   function handleCircleClick(index: number) {
      stopInterval();
      setActiveBanner(index);
      startInterval();
   }

   function getRoundCircle(activeBanner: number, index: number) {
      return (
         <div
            key={index}
            onClick={() => handleCircleClick(index)}
            className={`m-1 h-4 w-4 rounded-full ${activeBanner == index ? 'bg-gray-500' : 'bg-white'} cursor-pointer`}
         ></div>
      );
   }

   return (
      <div className="relative my-6 transition">
         {getImage(activeBanner)}
         <div className="absolute bottom-4 left-[43%] z-30 flex">
            {imageList.map((_, index) => getRoundCircle(activeBanner, index))}
         </div>
      </div>
   );
};

export default Banner;
