import Hero, {Form, HeroText} from './components/Hero/hero';
import Services, {Card} from './components/services';
import BenefitsList from './components/benefits';
import Footer from './components/footer';
/*import Benefits from './components/benefits';
import Section from './components/section';
import Tables from './components/tables';
import { useState } from 'react';*/

const name = '[New Website]';
export const siteTile = 'Next.js Hello Example'

export default function Layout(){

    /*const [contacts, updateContacts] = useState([]);

    const addContact = (contact) => {

        updateContacts([...contacts, contact]);

    }*/

    return (

        /* 
        
            The building blocks together of the landing page where, each section, can be changed.
            I am using tailwind css in each component here because there are some custom css I want to use without pure css.
            
        */ 
        <div>
            
            <div 
                className='
                    bg-slate-100 h-auto
                    lg:pl-[135px] lg:pr-[300px] lg:pt-[5px]
                    md:px-[53px] md:pt-[120px]
                    px-[34px] pt-[165px]
                '>
                <Hero/>
            </div>   

            <div
                className='
                    lg:h-[755px] lg:px-[118px] lg:pt-[30px]
                    md:h-[1920px] md:px-[53px] md:pt-[120px]
                    h-[1860px] px-[34px] py-[180px] pt-[60px]
                '>
                <Services/>
            </div>
            
            <div
                className='
                    bg-slate-100
                    lg:h-[675px] lg:px-[80px] lg:pt-[15px]
                    md:h-[1115px] md:px-[53px] md:pt-[45px]
                    h-[1275px] pt-[20px]
                '>
                <BenefitsList/>
            </div>

            <div
                className='
                    bg-amber-400
                    lg:h-[620px] lg:pl-[136px] lg:pr-[150px] lg:py-[40px]
                    md:h-[700px] md:px-[53px] md:pt-[60px]
                    h-[950px] px-[30px] pt-[50px]
                '>
                <Footer/>
            </div>

        </div>
    )
}