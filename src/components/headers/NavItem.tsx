'use client';

import { useGlobalContext } from '@/context/GlobalContext';
import React from 'react';

interface NavItemProps {
   type: string;
}

const NavItem: React.FC<NavItemProps> = ({ type }) => {
   const { updateDrawer, getDrawer } = useGlobalContext();

   const handleMouseEnter = React.useCallback(() => {
      updateDrawer(type);
   }, [updateDrawer]);

   const handleMouseLeave = React.useCallback(() => {
      updateDrawer('');
   }, [updateDrawer]);

   return (
      <div
         className={`group relative flex h-full cursor-pointer items-center border-b-4 ${getDrawer() === type ? 'border-black' : 'border-white'}`}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         <span className="block">{type}</span>
         <div
            className={`fixed left-[117px] top-[78px] z-30 h-[55%] w-[70%] bg-white transition-opacity duration-500 ease-in-out ${
               getDrawer() === type
                  ? 'pointer-events-auto opacity-100'
                  : 'pointer-events-none opacity-0'
            }`}
         >
            {type}
         </div>
      </div>
   );
};

export default NavItem;
