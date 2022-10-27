import React from 'react';
import {MyLogo} from './navbar';
import logo from '../images/logo.png';
import Link from 'next/link';

const Footer = () => {

    return (

        <div>
            <div>
                <Offer
                    offerTitle='Free First Hour'
                    offerParag="Are you a new client thinking about doing a service with us. Let us encorage you to see our quality. We are giving you a free hour ticket. To have excess of this gift, you just have to talk with us via email or phone and shecule your first cleaning."
                    offerButton='Get your free hour'            
                />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mt-[100px]'>
                <div>
                    <FooterFirst
                        bellowLogoParag="A cleaned house makes people Happy. © 2022 Copyright: happycleaning.com | Created by Brian Moreira"
                    />
                </div>
                <div className='pt-6'>
                    <FooterInfoLink
                        footerTitle="Link"
                        footerInfoOne='services'
                        footerInfoTwo='Benefits'
                        footerInfoThree='Promotion'
                    />
                </div>
                <div className='pt-6'>
                    <FooterInfo
                        footerTitle='Contacts'
                        footerInfoOne='(+31)68786-0673'
                        footerInfoTwo='info@happycleaning.com'
                    />
                </div>
                <div className='pt-6'>
                    <FooterInfo
                        footerTitle='About'
                        footerInfoOne='History'
                        footerInfoTwo='Values'
                        footerInfoThree='Mission'
                    />
                </div>
            </div>
        </div>

    )

}

export const Offer = ({offerTitle, offerParag, offerButton}) => {

    return (

        <div>
            <h2 className='text-[40px] lg:text-[70px]'>{offerTitle}</h2>
            <p className='text-[19px] md:text-[24px] lg:text-[20px] mb-5 font-light text-black'>
                {offerParag}
            </p>
            <button className='px-8 py-2 rounded border border-black hover:bg-slate-800 hover:text-white'>{offerButton}</button>
            <div className='mt-[50px]'>
                <hr className='border-black'/>
            </div>
        </div>

    )

}

export const FooterFirst = ({bellowLogoParag}) => {
    return (
        <div className='text-left'>
            <MyLogo
                imageSrc={logo}
                widthLogo={150}
                heightLogo={100}
            />
            <h2 className='font-light'>{bellowLogoParag}</h2>
        </div> 
    )
}

export const FooterInfo = ({footerTitle, footerInfoOne, footerInfoTwo, footerInfoThree}) => {

    return (

        <div>
           <h2 className='text-black text-[30px] mb-3'>{footerTitle}</h2>
           <div className='underline'>
                <p className='lg:mb-2'>{footerInfoOne}</p>
                <p className='lg:mb-2'>{footerInfoTwo}</p>
                <p className='lg:ml-[18px]'>{footerInfoThree}</p>
           </div>
        </div>

    )

}

export const FooterInfoLink = ({footerTitle, footerInfoOne, footerInfoTwo, footerInfoThree}) => {

    return (

        <div>
           <h2 className='text-black text-[30px] mb-3'>{footerTitle}</h2>
           <div className=''>
                <p><Link href="">{footerInfoOne}</Link></p>
                <p><Link href="">{footerInfoTwo}</Link></p>
                <p><Link href="">{footerInfoThree}</Link></p>
           </div>
        </div>

    )

}

export default Footer;
