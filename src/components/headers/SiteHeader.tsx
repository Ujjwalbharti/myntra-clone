import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import NavItem from './NavItem';
import NavIcon from './NavIcon';

const SiteHeader = () => {
    return (
        <>
            <div className='h-[80px] flex items-center justify-center w-full text-gray-700 font-sans font-bold z-30 fixed bg-white'>
                <div className='h-[80px] flex w-1/2 justify-start text-sm ml-6'>
                    <div className='flex items-center justify-center mx-8'>
                        <Image src={"/myntra-icon.svg"} width={53} height={36} alt='icon' />
                    </div>
                    <div className='flex items-center justify-center ml-4 mr-4 uppercase gap-12'>
                        <NavItem type='Men' />
                        <NavItem type='Women' />
                        <NavItem type='Kids' />
                        <NavItem type='Home & Living' />
                        <NavItem type='Beauty' />
                    </div>
                </div>
                <div className='h-[80px] flex w-1/2 items-center justify-between mr-6'>
                    <div className='h-[50%] flex justify-center items-center w-[75%] text-gray-600 bg-gray-100 focus-within:bg-white transition focus-within:border'>
                        <FaSearch className='mr-5 font-normal' />
                        <input type='text' className='w-[88%] bg-transparent outline-none font-normal text-sm font-sans' placeholder='Search for products, brands and more' />
                    </div>
                    <div className='flex justify-between items-center w-[20%]'>
                        <NavIcon type="profile" />
                        <NavIcon type="wishlist" />
                        <NavIcon type="bag" />
                    </div>
                </div>
            </div>
            <div className='h-[80px]'></div>
        </>
    );
}

export default SiteHeader;