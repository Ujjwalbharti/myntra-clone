import { CategoryData, getSubcategoriesByOrder } from '@/utils/categoryDataHelper';
import React from 'react';

interface NavItemData {
   type: string;
}

const NavItemData: React.FC<NavItemData> = ({ type }) => {
   function getColumnItem(subCategory: CategoryData, index: number): React.ReactNode {
      return (
         <div key={index} className='flex flex-col'>
            <p>{subCategory.category}</p>
            {subCategory.items.map((item, i) => (
               <p key={i}>{item}</p>
            ))}
            <div className={`${subCategory.items.length === 0 ? 'hidden' : ''}`}>end</div>
         </div>
      );
   }

   function getColumn(index: number): React.ReactNode {
      const categoryData = getSubcategoriesByOrder(type, index);
      return (
         <div key={index} className="flex h-full w-1/5 flex-col justify-between">
            {categoryData.map((subCategory, index) => getColumnItem(subCategory, index))}
         </div>
      );
   }

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
