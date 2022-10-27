import Benefits from './components/benefits';
import Header, {HeaderText} from './components/header';
import Services, {Card} from './components/services';
import BenefitsList from './components/benefits';
import Section from './components/section';
import Footer from './components/footer';

const name = '[New Website]';
export const siteTile = 'Next.js Hello Example'

export default function Layout(){
    return (
        <div>
            <div id='layoutcss' className='py-[120px] px-[30px] h-[600px] md:px-[60px] lg:h-[700px]
            lg:mt-[80px] lg:py-[130px] lg:px-[100px]'>
                <Section
                    secTitle="Professional Cleaning Services In Amsterdam Area"
                />
            </div>
            <div className='bg-[#fff] py-[30px] h-[1720px] md:h-[1800px] md:px-[40px] lg:h-[700px]
             lg:pt-[5px] lg:px-[140px] text-center'>
                <Services/>
            </div>
            <div className='bg-slate-100 py-[30px] h-[1300px] md:h-[1100px] md:px-[40px] lg:h-[690px]
             lg:py-[20px] lg:px-[60px] text-center'>
                <BenefitsList/>
            </div>
            <div className='bg-amber-400 py-[30px] px-[30px] h-[930px] md:h-[740px] md:pt-[50px] md:px-[40px] lg:h-[650px]
             lg:py-[50px] lg:px-[150px] text-center'>
                <Footer/>
            </div>
        </div>
    )
}