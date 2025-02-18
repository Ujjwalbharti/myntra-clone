'use client';

import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

const StickySideBar = () => {
   const [hide, setHide] = useState(true);
   function updateHide(flag: boolean) {
      setHide(!flag);
   }
   function getArrow(hide: boolean): ReactNode {
      if (!hide) {
         return <FaCaretRight className="text-3xl" />;
      }
      return <FaCaretLeft className="text-4xl" />;
   }

   return (
      <div
         className={`fixed bottom-28 right-0 z-30 flex h-[300px] ${hide ? `w-[50px]` : `w-[600px]`} items-center justify-start`}
      >
         <div
            className={`flex h-full flex-col items-center justify-evenly bg-gray-500 font-sans text-2xl font-extrabold text-white`}
            onClick={() => updateHide(hide)}
         >
            {getArrow(hide)}
            <p
               className={`${hide ? `w-[50px]` : `w-[40px]`} flex rotate-180 items-center justify-center tracking-wide [writing-mode:vertical-rl]`}
            >
               UPTO ₹300 OFF
            </p>
         </div>

         <div
            className={`flex h-full ${hide ? `w-[550px]` : `w-[560px]`} flex-col justify-between bg-gradient-to-r from-pink-100 to-yellow-50 px-8 py-3 pt-6`}
         >
            <div className="flex justify-start">
               <div className="flex flex-col pt-7">
                  <div className="pb-4 text-xs font-bold text-gray-500">Avail upto</div>
                  <div className="text-4xl font-extrabold text-gray-600">300 OFF</div>
               </div>
               <div>
                  <Image
                     src={`/banner/home/8th.png`}
                     width={150}
                     height={120}
                     alt="banner"
                     className="ml-24 object-contain"
                  />
               </div>
            </div>
            <div className="flex justify-start">
               <div className="flex flex-col justify-between">
                  <div className="pb-2">
                     <b className="text-sm">Coupon Code: </b>
                     <span className="font-extrabold ml-2"> MYNTRASAVE</span>
                  </div>
                  <div className="text-xs text-gray-600">Available on your first order</div>
               </div>
               <div>
                  <button className="ml-20 rounded-lg bg-pink-500 p-4 font-extrabold text-white">
                     Sign Up now &gt;{' '}
                  </button>
               </div>
            </div>
            <div className="-mx-8 flex items-center justify-center border-t-[1px] border-gray-400 pt-1 text-sm text-gray-600">
               <div className="flex items-center justify-center">
                  <FaCheckCircle className="mx-1 text-lg font-bold text-green-500" />
                  <div className="mr-8">Genuine Products</div>
               </div>
               <div className="flex items-center justify-center">
                  <GiClothes className="mx-1 text-lg font-bold text-green-500" />
                  <div className="mr-8">Try & Buy</div>
               </div>
               <div className="flex items-center justify-center">
                  <HiOutlineSwitchHorizontal className="mx-1 text-lg font-bold text-green-500" />
                  <div className="">Easy Exchanges and Returns</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default StickySideBar;
