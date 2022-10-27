import Image from 'next/image';
import Head from 'next/head';
import React, {useState} from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Services = () => {
    return (
        <div className='px-[30px]'>
            <div className='lg:pt-3 text-center'>
                <h1 className='text-[40px] md:text-[60px]'>
                    Services
                </h1>
                <p className='text-[19px] md:text-[24px] lg:text-[20px] mt-4 font-light text-slate-800'>
                    In order to let your house perfect we have three main services.
                    Choose what matches more with your needs. Bellow you can understand
                    better the diferences and also the price per hour. Transparency is key to us.
                </p>
            </div>
            <div className='grid lg:grid-cols-3 gap-4'>
                <div>
                    <Card
                        headtwo="Frequent Cleaning"
                        pPrice="22"
                        pFirstDesc='Cleaning products not included'
                        pSecDesc='1€ per hour for Cleaning Products'
                        pThirdDesc='Laundry services optional'
                    />
                </div>
                <div>
                    <CardTwo
                        headtwo='Deep Cleaning'
                        pPrice='28'
                        pFirstDesc='Cleaning products included'
                        pSecDesc='Vaccum cleaner optional'
                        pThirdDesc='Two workers together'
                    />
                </div>
                <div>
                    <Card
                        headtwo='Pos Construction'
                        pPrice='32'
                        pFirstDesc='Cleaning products included'
                        pSecDesc='Vaccum cleaner included'
                        pThirdDesc='Three or more workers together'
                    />
                </div>
            </div>
        </div>
    )
}

export const Card = ({headtwo, headthree, pPrice, pFirstDesc, pSecDesc, pThirdDesc}) => {
    return (
        <div className='rounded-xl border-t-4 border-gray-100 mt-11 shadow-2xl'>
            <div className='shadow-lg py-5 rounded bg-slate-600'>
                <h2 className='text-[30px] text-white'>{headtwo}</h2>
            </div>
            <div className='shadow-xl py-8 rounded-xl'>
                <div className='px-2'>
                    <p><strong className='text-[45px]'>${pPrice}</strong>/pHour</p>
                    <p className='text-[18px] mt-[16px] font-light text-slate-800'>{pFirstDesc}</p>
                    <p className='text-[18px] mt-[12px] font-light text-slate-800'>{pSecDesc}</p>
                    <p className='text-[18px] mt-[12px] font-light text-slate-800'>{pThirdDesc}</p>
                </div>
                <button className='bg-slate-600 hover:bg-amber-600 rounded py-3 px-[90px] text-white mt-8'>
                    Know More
                </button>
            </div>
        </div>
    )
}

export const CardTwo = ({headtwo, pPrice, pFirstDesc, pSecDesc, pThirdDesc}) => {
    return (
        <div className='rounded-xl border-t border-indigo-50 mt-11 shadow-xl'>
            {/* Changed the heads color of the card */}
            <div className='shadow-lg py-5 rounded-t bg-amber-400'>
                <h2 className='text-[30px]'>{headtwo}</h2>
            </div>
            <div className='shadow-xl py-8 rounded-xl'>
                <div className='px-2'>
                    <p><strong className='text-[45px]'>${pPrice}</strong>/pHour</p>
                    <p className='text-[18px] mt-[16px] font-light text-slate-800'>{pFirstDesc}</p>
                    <p className='text-[18px] mt-[12px] font-light text-slate-800'>{pSecDesc}</p>
                    <p className='text-[18px] mt-[12px] font-light text-slate-800'>{pThirdDesc}</p>
                </div>
                <button className='bg-amber-400 rounded py-3 px-[90px] hover:bg-amber-600 hover:text-white mt-8'>
                    Know More
                </button>
            </div>
        </div>
    )
}

export default Services