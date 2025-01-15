import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import NavItem from './NavItem';
import NavIcon from './NavIcon';

const SiteHeader = () => {
   return (
      <>
         <div className="fixed z-40 flex h-[80px] w-full items-center justify-center bg-white font-sans font-bold text-gray-700">
            <div className="ml-6 flex h-[80px] w-1/2 justify-start text-sm">
               <div className="mx-8 flex items-center justify-center">
                  <Image src={'/myntra-icon.svg'} width={53} height={36} alt="icon" />
               </div>
               <div className="ml-4 mr-4 flex items-center justify-center gap-12 uppercase">
                  <NavItem type="Men" />
                  <NavItem type="Women" />
                  <NavItem type="Kids" />
                  <NavItem type="Home & Living" />
                  <NavItem type="Beauty" />
               </div>
            </div>
            <div className="mr-6 flex h-[80px] w-1/2 items-center justify-between">
               <div className="flex h-[50%] w-[75%] items-center justify-center bg-gray-100 text-gray-600 transition focus-within:border focus-within:bg-white">
                  <FaSearch className="mr-5 font-normal" />
                  <input
                     type="text"
                     className="w-[88%] bg-transparent font-sans text-sm font-normal outline-none"
                     placeholder="Search for products, brands and more"
                  />
               </div>
               <div className="flex w-[20%] items-center justify-between">
                  <NavIcon type="profile" />
                  <NavIcon type="wishlist" />
                  <NavIcon type="bag" />
               </div>
            </div>
         </div>
         <div className="h-[80px]"></div>
      </>
   );
};

export default SiteHeader;
