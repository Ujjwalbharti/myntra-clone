import jsonData from '@/data/categoryData.json';

export type CategoryData = {
   items : string[],
   order : number,
   category: string
}

type CategoriesData = {
   [mainCategory: string]: {
      [categoryName: string]: CategoryData;
   };
};

const data = jsonData['categories'] as CategoriesData;

const getAllCategories = (mainCategory: string): string[] => {
   mainCategory = mapNavItemToKey(mainCategory);
   if (!data[mainCategory]) {
      throw new Error(`Main category "${mainCategory}" does not exist.`);
   }
   return Object.keys(data[mainCategory]);
};

const getSubcategories = (mainCategory: string, categoryName: string): CategoryData => {
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

const getSubcategoriesByOrder = (mainCategory: string, index: number): CategoryData[] => {
   mainCategory = mapNavItemToKey(mainCategory);
   const categories = getAllCategories(mainCategory);
   const columnItems : CategoryData[] = []
   categories.forEach((categoryName) =>{
      const subCategory = getSubcategories(mainCategory, categoryName);
      if(subCategory.order === index){
         subCategory.category = categoryName;
         columnItems.push(subCategory);
      }
   });
   return columnItems;
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
         return type;
   }
};

export { getAllCategories, getSubcategories, mapNavItemToKey, getSubcategoriesByOrder };
