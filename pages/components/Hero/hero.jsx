import React, {useState} from 'react';
// import Tables from './tables';


const Hero = ({addContact}) => {
    return (
        <div className='text-black'>
            <div className='
                grid lg:grid-flow-col lg:grid-cols-2 lg:text-left
                text-center
            
                '>
                <div className='mt-[-36px] md:mt-[30px]'>
                    <HeroText
                        headOne='Professional cleaning
                        services in Amsterdam Area'
                        pOne='Let us help you!'
                        pTwo='Let your information using the form
                        and our team will get in touch.
                        You can also know more about us
                        clicking on this two buttons bellow.'
                    />
                </div>
                <div id='layoutcss'
                    className='
                        lg:w-[600px] lg:h-[670px] lg:mt-[55px]
                        md:w-[500px] md:h-[480px] md:ml-[90px] md:mt-[-20px] md:mt-[0px]
                        w-[300px] h-[330px] sml:pt-[-10px] 
                    '>
                </div>
            </div>
        </div>
    )
}

export const HeroText = ({headOne, pOne, pTwo}) => {
    return (
        <div className='lg:pt-[120px]'>
            <h1 className='
                    lg:text-[50px]
                    md:text-[60px]
                    text-[40px]
                '>
                {headOne}
            </h1>
            <p className='
                    text-[30px]
                    md:text-[40px]
                    mt-4'>
                {pOne}
            </p>
            <p className='
                    lg:text-[20px]
                    md:text-[24px]
                    text-[19px] mt-4'>
                {pTwo}
            </p>
            <div className='mt-3'>
                <button className='text-black border border-gray-500 hover:border-amber-600 rounded py-2 px-4 hover:bg-amber-600 hover:text-white mt-4 mr-3'>
                   <a href="bit.ly/3PTAvii">Know More</a>
                </button>
                <button className='bg-amber-400 rounded py-2 px-4 hover:bg-amber-600 hover:text-white mt-4'>
                    <a href="bit.ly/3PTAvii">Know More</a>
                </button>
            </div>
        </div>
    )
}

export const Form = ({addContact}) => {

    const [contactInfo, setContactInfo] = useState({

        name: "",
        email: "",
        phonenumber: ""

    });

    const handleChange = (event) => {

        setContactInfo({...contactInfo, [event.target.name]: event.target.value});

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addContact(contactInfo);
        setContactInfo({ name: "", email: "", phonenumber: "" });
    };

    return (
        <div className='bg-white shadow-xl rounded px-[35px] py-[25px]'>
            <div>
                <h2 className='text-[30px]'>
                    Talk with our team
                </h2>
                <p className='text-[20px] mt-2'>
                    Add your info bellow
                </p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='mt-11'>
                        <label for="name">First name:</label>
                        <input
                            className='py-2 rounded mt-3 w-full border-2 pl-3'
                            type="text"
                            id="name"
                            name="name"
                            value={contactInfo.name}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className='mt-11'>
                        <label for="email">Email</label>
                        <input
                            className='py-2 rounded mt-3 w-full border-2 pl-3'
                            type="email"
                            id="email"
                            name="email"
                            value={contactInfo.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='mt-11'>
                        <label for="name">Phone</label>
                        <input
                            className='py-2 rounded mt-3 w-full border-2 pl-3'
                            type="number"
                            id="phone"
                            name="phonenumber"
                            value={contactInfo.phonenumber}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        className='bg-amber-400 rounded py-2 px-4 hover:bg-amber-600 hover:text-white mt-8 w-full'>
                        Know More
                    </button>       
                    
                    <p className='mt-8'><small>We will not do nothing with your data, only contact you.</small></p>         
                </form>
            </div> 
        
        </div>
    )

}



 /* The POST method adds a new entry in the mongodb database. */
 const postData = async (formLeads) => {
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(formLeads),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      router.push('/')
    } catch (error) {
      setMessage('Failed to add pet')
    }
  }

export default Hero