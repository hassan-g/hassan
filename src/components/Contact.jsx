import React from 'react'

function Contact() {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex  justify-center items-center p-4 mt-10' >
        <form method='POST' action='https://getform.io/f/a783b478-dc72-447c-915a-7d303244563c' className='flex flex-col max-w-[600px] w-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-pink-700  text-gray-300'>Contact</p>
                <p className='py-4 text-gray-300'>//Shoot me an Email </p> 
            </div>
            
                <input className='p-2 bg-[#ccd6f6] outline-none rounded-sm'  type='text' placeholder='name' name='name'/>
                <input className='p-2 bg-[#ccd6f6] my-4 outline-none rounded-sm'  type='email' placeholder='Email' name='email'/>
                <textarea className='p-2 bg-[#ccd6f6] outline-none rounded-sm' name='message' rows="10" placeholder='Message' ></textarea>
                <button className='text-white border-2 bg-pink-700 px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact