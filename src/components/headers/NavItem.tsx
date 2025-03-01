'use client';

import { useGlobalContext } from '@/context/GlobalContext';
import { getAllCategories, mapNavItemToKey } from '@/utils/categoryDataHelper';
import React from 'react';
import NavItemData from './NavItemData';

interface NavItemProps {
   type: string;
}

const NavItem: React.FC<NavItemProps> = ({ type }) => {
   const { updateDrawer, getDrawer } = useGlobalContext();
   const categories = getAllCategories(type);

   const handleMouseEnter = React.useCallback(() => {
      updateDrawer(type);
   }, [updateDrawer, type]);

   const handleMouseLeave = React.useCallback(() => {
      updateDrawer('');
   }, [updateDrawer]);

   return (
      <div
         className={`group relative flex h-full cursor-pointer items-center border-b-4 ${getDrawer() === type ? getBorderColorBy(type) : 'border-white'}`}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         <span className="block">{type}</span>
         <div
            className={`fixed left-[117px] top-[78px] h-[55%] w-[70%] bg-white transition-opacity duration-500 ease-in-out ${
               getDrawer() === type
                  ? 'pointer-events-auto z-40 opacity-100'
                  : 'pointer-events-none opacity-0'
            }`}
         >
            <NavItemData type={type} />
         </div>
      </div>
   );
};

const getBorderColorBy = (type: string): string => {
   switch (mapNavItemToKey(type)) {
      case 'men':
         return 'border-rose-400';
      case 'women':
         return 'border-pink-500';
      case 'kids':
         return 'border-orange-500';
      case 'home_and_living':
         return 'border-yellow-500';
      case 'beauty':
         return 'border-teal-500';
      default:
         return '';
   }
};

export default NavItem;
