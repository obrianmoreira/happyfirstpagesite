import React from "react";

export const Section = ({secTitle, secSub, secParag}) => {
    return (
        <div className='lg:p-[80px] text-center'>
            <h1 className='text-white font-semibold text-[47px] md:text-[70px]'>{secTitle}</h1>
            <p className='text-[30px] md:text-[40px] mt-4'>
                {secSub}
            </p>
            <p className='text-white text-[19px] md:text-[24px] lg:text-[20px] mt-4'>
                {secParag}
            </p>
            <div className='mt-3'>
                <button className='text-black rounded bg-amber-400 hover:bg-amber-600 py-2 px-4 hover:text-white mt-4 mr-3'>
                    Know More
                </button>
                <button className='bg-amber-600 rounded py-2 px-4 hover:bg-amber-400 text-white hover:text-black mt-4'>
                    Our Services
                </button>
            </div>
        </div>
    )
}

export default Section