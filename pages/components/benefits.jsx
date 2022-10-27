import Image from 'next/image';
import Head from 'next/head';
import React, {useState} from 'react';
import { BsCheckSquareFill, BsEmojiLaughingFill, BsHandThumbsUpFill, BsGeoAltFill } from "react-icons/bs";
import { RiNumber1 } from "react-icons/ri";


const Benefits = () => {
    return (
        <div className='px-[30px] lg:px-[60px] lg:py-[30px] text-left'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div>
                    <ListHeader
                        headerTitle='Benefits'
                        headerDesc='Our main objective as a cleaning company is to provide the best experience to our customers.To achieve this goal, we focus on four concepts: service quality, work ethic, transparency and flexibility.'
                    />
                </div>
                <div className='grid grid-cols-1 mt-11 lg:grid-cols-2'>
                    <div className='mb-10 lg:mb-0'>
                        <List
                            benefitNumber={<BsCheckSquareFill/>}
                            benefitTitle='Quality'
                            benefitDesc='For us quality means thinking like the owner in order to find how to do the best service on time.'
                        />
                    </div>
                    <div className='mb-10 lg:mb-0'>
                        <List
                            benefitNumber={<BsEmojiLaughingFill/>}
                            benefitTitle='Ethic'
                            benefitDesc='For us quality means thinking like the owner in order to find how to do the best service on time.'
                        />
                    </div>
                    <div className='mb-10 lg:mb-0'>
                        <List
                            benefitNumber={<BsHandThumbsUpFill/>}
                            benefitTitle='Transparency'
                            benefitDesc='For us quality means thinking like the owner in order to find how to do the best service on time.'
                        />
                    </div>
                    <div className='mb-10 lg:mb-0'>
                        <List
                            benefitNumber={<BsGeoAltFill/>}
                            benefitTitle='Flexibility'
                            benefitDesc='For us quality means thinking like the owner in order to find how to do the best service on time.'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ListHeader = ({headerTitle, headerDesc}) => {
    return(
        <div className='pt-9 lg:mr-[70px]'>
            <h2 className='text-[35px] text-black'>{headerTitle}</h2>
            <p className='text-[20px] font-light text-slate-800'>{headerDesc}</p>
        </div>
        
    )
}

export const List = ({benefitNumber, benefitTitle, benefitDesc}) => {
    return (
        <div className='lg:p-6'>
            <h2 className='text-amber-400 text-[30px] mb-3'>{benefitNumber}</h2>
            <h2 className='text-[30px] mb-3 text-black'>{benefitTitle}</h2>
            <p className='text-[20px] font-light text-slate-800'>{benefitDesc}</p>
        </div>
    )
}

export default Benefits