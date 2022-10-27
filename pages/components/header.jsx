import React, {useState} from 'react';


const Header = () => {
    return (
        <div className='text-black'>
            <div className='grid lg:grid-cols-2 gap-4'>
                <HeaderText
                    headOne='Professional cleaning
                    services in Amsterdam Area'
                    pOne='Let us help you!'
                    pTwo='Let your information using the form
                    and our team will get in touch.
                    You can also know more about us
                    clicking on this two buttons bellow.'
                />
                <div className='lg:ml-[50px] lg:mt-[-20px] mt-[30px]'>
                    <Form/>
                </div>
            </div>
        </div>
    )
}

export const HeaderText = ({headOne, pOne, pTwo}) => {
    return (
        <div className='lg:pt-3'>
            <h1 className='text-[47px] md:text-[60px]'>{headOne}</h1>
            <p className='text-[30px] md:text-[40px] mt-4'>
                {pOne}
            </p>
            <p className='text-[19px] md:text-[24px] lg:text-[20px] mt-4'>
                {pTwo}
            </p>
            <div className='mt-3'>
                <button className='text-black border border-gray-500 hover:border-amber-600 rounded py-2 px-4 hover:bg-amber-600 hover:text-white mt-4 mr-3'>
                    Know More
                </button>
                <button className='bg-amber-400 rounded py-2 px-4 hover:bg-amber-600 hover:text-white mt-4'>
                    Know More
                </button>
            </div>
        </div>
    )
}

const Form = () => {

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
                <form id={postData} method='post'>
                    <div className='mt-11'>
                        <label for="first">First name:</label>
                        <input className='py-2 rounded mt-3 w-full border-2 pl-3' type="text" id="first" name="first" />
                    </div>
                    <div className='mt-4'>
                        <label for="first">First name:</label>
                        <input className='py-2 rounded mt-3 w-full border-2 pl-3' type="text" id="first" name="first" />
                    </div>
                    <div className='mt-4'>
                        <label for="first">First name:</label>
                        <input className='py-2 rounded mt-3 w-full border-2 pl-3' type="text" id="first" name="first" />
                    </div>
                    <button className='bg-amber-400 rounded py-2 px-4 hover:bg-amber-600 hover:text-white mt-8 w-full'>
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

export default Header