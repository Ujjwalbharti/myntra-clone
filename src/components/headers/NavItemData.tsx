import { CategoryData, getSubcategoriesByOrder, mapNavItemToKey } from '@/utils/categoryDataHelper';
import React from 'react';

interface NavItemData {
   type: string;
}

const NavItemData: React.FC<NavItemData> = ({ type }) => {
   function getColumnItem(
      subCategory: CategoryData,
      index: number,
      totalLength: number
   ): React.ReactNode {
      return (
         <div key={index} className="mt-5 flex flex-col">
            <p className={`mb-3 text-xs ${getTextColorBy(type)} font-bold`}>{subCategory.category}</p>
            {subCategory.items.map((item, i) => (
               <p key={i} className={`py-[2px] text-[11px] font-normal`}>
                  {item}
               </p>
            ))}
            <div
               className={`${subCategory.items.length === 0 || index == totalLength - 1 ? 'hidden' : ''} mt-2 w-[80%] border-t-[1px] border-gray-200`}
            ></div>
         </div>
      );
   }

   function getColumn(index: number): React.ReactNode {
      const categoryData = getSubcategoriesByOrder(type, index);
      return (
         <div
            key={index}
            className={`flex h-full w-1/5 flex-col justify-start ${index % 2 == 0 ? 'bg-zinc-50' : ''} pl-6 font-sans`}
         >
            {categoryData.map((subCategory, index) =>
               getColumnItem(subCategory, index, categoryData.length)
            )}
         </div>
      );
   }

   const getTextColorBy = (type: string): string => {
      switch (mapNavItemToKey(type)) {
         case 'men':
            return 'text-rose-400';
         case 'women':
            return 'text-pink-500';
         case 'kids':
            return 'text-orange-500';
         case 'home_and_living':
            return 'text-yellow-500';
         case 'beauty':
            return 'text-teal-500';
         default:
            return '';
      }
   };

   return (
      <div className="flex h-full w-full">
         {getColumn(1)}
         {getColumn(2)}
         {getColumn(3)}
         {getColumn(4)}
         {getColumn(5)}
      </div>
   );
};

export default NavItemData;
