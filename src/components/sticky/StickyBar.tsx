'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa6';

const StickyBar = () => {
   const [hide, setHide] = useState(true);
   function updateHide(flag: boolean) {
      setHide(!flag);
   }
   return (
      <div
         className={`fixed bottom-10 right-0 z-50 flex h-[300px] ${!hide ? `w-[500px]` : `w-[40px]`} items-center justify-start overflow-hidden`}
      >
         <div
            className={`flex h-full w-[40px] flex-col items-center justify-between bg-gray-700 px-2 py-4`}
            onClick={() => updateHide(hide)}
         >
            <FaChevronRight className="h-6 w-6 text-white" />
            <p className="rotate-180 text-lg font-extrabold tracking-wide text-white [writing-mode:vertical-rl]">
               UPTO ₹300 OFF
            </p>
         </div>

         <div className="flex h-full w-[460px] flex-col justify-between bg-gradient-to-r from-pink-100 to-rose-50">
            <div className="flex justify-between">
               <div className="flex-col">
                  <div>Avail upto</div>
                  <div>300 OFF</div>
               </div>
               <div>
                  <Image
                     src={`/banner/home/8th.png`}
                     width={150}
                     height={120}
                     alt="banner"
                     className="object-contain"
                  />
               </div>
            </div>
            <div className="flex justify-between">
               <div className="flex-col">
                  <div>Coupon Code : MYNTRASAVE</div>
                  <div>Available on your first order</div>
               </div>
               <div>
                  <button>Sign Up now &gt; </button>
               </div>
            </div>
            <div className="flex justify-between">
               <div>Genuine Products</div>
               <div>Try & Buy</div>
               <div>Easy Exchanges and Returns</div>
            </div>
         </div>
      </div>
   );
};

export default StickyBar;
