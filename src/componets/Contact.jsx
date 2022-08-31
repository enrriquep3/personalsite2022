import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' w-full h-screen bg-[#050823] flex justify-center items-center p-4'>
    <form method='POST' action='https://getform.io/f/db25c8a5-243b-4091-9239-3de84ad19731' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'> Submit the form below or simply email me at: <a href='mailto:enrriquep3@gmail.com'> enrriquep3@gmail.com </a></p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="6" placeholder='Message' />
        <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 duration-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's talk</button>

    </form>
       
    </div>
  )
}

export default Contact