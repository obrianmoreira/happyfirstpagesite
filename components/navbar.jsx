import Image from 'next/image';
import Head from 'next/head';
import React, {useState} from 'react';
import imageSrc from '../public/images/logo.png';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className="fixed left-0 top-0 w-full ease-in duration-300 bg-amber-400 p-3 px-[120px]">
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
                <div className='ml-[-110px] md:ml-[-80px] lg:ml-0'>
                    <MyLogo/>
                </div>
                <div className='mr-[-100px] pt-3 md:mr-[-70px] lg:pt-0 lg:mr-0'>
                    <MyNavbarLink/>
                </div>
            </div>
        </div>
    )
}

const MyLogo = () => {
    return (
        <Image
            src={imageSrc}
            width={102}
            height={52}
        />
    )
}

const MyNavbarLink = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div>
            <ul className='hidden sm:flex space-x-6 text-[22px]'>
                <li className='pt-2'><Link href="/">Home</Link></li>
                <li className='pt-2'><Link href="/">Services</Link></li>
                <li className='pt-2'><Link href="/">Benefits</Link></li>
                <li className='bg-slate-600 hover:bg-slate-800 rounded text-white border-solid px-4 py-2'><Link href="/">Free Hour</Link></li>
            </ul>
            
            {/* Mobile Button */}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ?  <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            
            {/* Mobile Menu */}
            <div className={
                nav 
                    ? 'sm:hidden absolute top-[113px] left-0 right-0 bottom-0 flex justify-center items-center w-full h-fit bg-amber-300 text-center ease-in duration-300'
                    : 'sm:hidden absolute top-[113px] left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-fit bg-amber-300 text-center ease-in duration-300'
                }>
                <ul>
                    <li className='p-4 text-[27px]'><Link href="/">Home</Link></li>
                    <li className='p-4 text-[27px]'><Link href="/">Services</Link></li>
                    <li className='p-4 text-[27px]'><Link href="/">Benefits</Link></li>
                    <li className='p-4 text-[27px]'><Link href="/">Free Hour</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar