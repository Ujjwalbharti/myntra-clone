import { FaSearch } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import Image from 'next/image';

const SiteHeader = () => {
    return (
        <>
            <div className='h-[80px] flex items-center justify-center w-full text-gray-700 font-sans font-bold z-30 fixed bg-white'>
                <div className='h-[80px] flex w-1/2 justify-start text-sm ml-6'>
                    <div className='mx-8 flex items-center justify-center'>
                        <Image src={"/myntra-icon.svg"} width={53} height={36} alt='icon' />
                    </div>
                    <div className='flex items-center justify-center mr-4 uppercase gap-12 ml-4'>
                        <div className='flex items-center h-full relative group hover:border-b-4 hover:border-black'>
                            <span className='block'>Men</span>
                            <div className='hidden fixed h-[55%] w-[70%] left-[117px] top-[80px] z-30 bg-white group-hover:block'>
                                Men
                            </div>
                        </div>
                        <div className='flex items-center h-full relative group hover:border-b-4 hover:border-black'>
                            <span className='block'>Women</span>
                            <div className='hidden fixed h-[55%] w-[70%] left-[117px] top-[80px] z-30 bg-white group-hover:block'>
                                Women
                            </div>
                        </div>
                        <div className='flex items-center h-full relative group hover:border-b-4 hover:border-black'>
                            <span className='block'>Kids</span>
                            <div className='hidden fixed h-[55%] w-[70%] left-[117px] top-[80px] z-30 bg-white group-hover:block'>
                                Kids
                            </div>
                        </div>
                        <div className='flex items-center h-full relative group hover:border-b-4 hover:border-black'>
                            <span className='block'>Home & Living</span>
                            <div className='hidden fixed h-[55%] w-[70%] left-[117px] top-[80px] z-30 bg-white group-hover:block'>
                                Home & Living
                            </div>
                        </div>
                        <div className='flex items-center h-full relative group hover:border-b-4 hover:border-black'>
                            <span className='block'>Beauty</span>
                            <div className='hidden fixed h-[55%] w-[60%] left-[117px] top-[80px] z-30 bg-white group-hover:block'>
                                Beauty
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[80px] flex w-1/2 items-center justify-between mr-6'>
                    <div className='h-[50%] flex justify-center items-center w-[75%] text-gray-600 bg-gray-100 focus-within:bg-white transition focus-within:border'>
                        <FaSearch className='mr-5 font-normal' />
                        <input type='text' className='w-[88%] bg-transparent outline-none font-normal text-sm font-sans' placeholder='Search for products, brands and more' />
                    </div>
                    <div className='flex justify-between items-center w-[20%]'>
                        <div className='flex flex-col items-center justify-center'>
                            <AiOutlineUser className='m-1' />
                            <span className='block text-xs'>Profile</span>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <FiHeart className='m-1' />
                            <span className='block text-xs'>Wishlist</span>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <FiShoppingBag className='m-1' />
                            <span className='block text-xs'>Bag</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[80px]'></div>
        </>
    );
}

export default SiteHeader;