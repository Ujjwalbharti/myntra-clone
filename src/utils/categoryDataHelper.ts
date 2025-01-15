import categoryData from '@/data/categoryData.json';

type CategoriesData = {
   [mainCategory: string]: {
      [categoryName: string]: string[];
   };
};

const data = categoryData['categories'] as CategoriesData;

const getAllCategories = (mainCategory: string): string[] => {
   mainCategory = mapNavItemToKey(mainCategory);
   if (!data[mainCategory]) {
      throw new Error(`Main category "${mainCategory}" does not exist.`);
   }
   return Object.keys(data[mainCategory]);
};

const getSubcategories = (mainCategory: string, categoryName: string): string[] => {
   mainCategory = mapNavItemToKey(mainCategory);
   if (!data[mainCategory]) {
      throw new Error(`Main category "${mainCategory}" does not exist.`);
   }
   const category = data[mainCategory];
   if (!category[categoryName]) {
      throw new Error(`Category "${categoryName}" does not exist inside "${mainCategory}".`);
   }
   return category[categoryName];
};

const mapNavItemToKey = (type: string): string => {
   switch (type.toLowerCase()) {
      case 'men':
         return 'men';
      case 'women':
         return 'women';
      case 'kids':
         return 'kids';
      case 'home & living':
         return 'home_and_living';
      case 'beauty':
         return 'beauty';
      default:
         return '';
   }
};

export { getAllCategories, getSubcategories, mapNavItemToKey };
