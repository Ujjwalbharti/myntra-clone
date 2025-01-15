'use client';

import Image from 'next/image';
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

   useEffect(() => {
      startInterval();

      return () => stopInterval();
   }, [imageList.length]);

   function startInterval() {
      stopInterval();
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
            key={index}
            onClick={() => handleCircleClick(index)}
            className={`m-1 h-4 w-4 rounded-full ${activeBanner == index ? 'bg-gray-500' : 'bg-white'} cursor-pointer`}
         ></div>
      );
   }

   return (
      <div className="relative my-6 transition">
         {getImage(activeBanner)}
         <div className="z-5 absolute bottom-4 left-[43%] flex">
            {imageList.map((_, index) => getRoundCircle(activeBanner, index))}
         </div>
      </div>
   );
};

export default Banner;
