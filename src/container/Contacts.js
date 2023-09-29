import React,{ useRef } from 'react'
import emailjs from "emailjs-com"
import whatsapp from "../assets/whatapps.gif"
import gmail from "../assets/gmail.gif"
import git from "../assets/git.png"
import twitter from "../assets/twitter.png"

const Contacts = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c1yw5a9', 'template_n4g26o6', form.current, 'S-dE24UAo1HuR3aOH')
    e.target.reset();
  };

  return (
    <div className='w-full h-full bg-gray-900 ' id='contact'>
        <div className='container mx-auto pt-10 relative '>
        <button className='shadow-xl shadow-black rounded-2xl h-[70px]  w-48 animate-bounce text-gray-400 font-Oswald text-2xl font-bold hover:text-white mx-auto absoulte mt-10'>CONTACT</button>
        <div className='W-10/12 h-fit'>
          <div class="md:flex md:gap-5">
            <section class="hidden md:grid md:grid-cols-2 xl:grid-cols-3  w-10/12 h-full  mx-auto my-auto  gap-5 xl:gap-4 text-center  text-gray-300">
            <div className="lg:w-[200px] lg:h-[200px] rounded-2xl shadow-xl shadow-black  bg-gray-900  ">
            <img src={whatsapp} alt="..." className='w-[100px] h-[100px] mx-auto my-auto' />
            <h5 className='font-Oswald font-semibold text-xl mt-2'>+91 7598483416</h5>
            <h6 className='font-Oswald font-semibold text-xl mt-2 text-gray-600'>Send Message</h6>
          </div> 
          <div className="w-[200px] h-[200px]  rounded-2xl shadow-xl shadow-black  bg-gray-900">
            <img src={gmail} alt="..." className='w-[100px] h-[100px] mx-auto my-auto' />
            <h5 className='font-Oswald font-semibold text-xl mt-2'>pavana004@gmail.com</h5>
            <h6 className='font-Oswald font-semibold text-xl mt-2 text-gray-600'>Send Message</h6>
          </div>
          <div className="w-[200px] h-[200px] rounded-2xl shadow-xl shadow-black bg-gray-900">
            <img src={git} alt="..." className='w-[100px] h-[100px] mx-auto my-auto animate-pulse' />
            <br/>
            <a href='https://github.com/Pavana004' target="_blank" rel="noreferrer" className='font-Oswald font-semibold text-xl my-auto mx-auto hover:text-white'>Check-Out</a>
            <h6 className='font-Oswald font-semibold text-xl mt-2 text-gray-600'>Source Code</h6>
          </div>
          <div className="w-[200px] h-[200px] rounded-2xl shadow-xl shadow-black bg-gray-900">
            <img src={twitter} alt="..." className='w-[100px] h-[100px] mx-auto my-auto animate-bounce' />
            <br />
            <h5 className='font-Oswald font-semibold text-xl '>@pavan34752714</h5>
            <h6 className='font-Oswald font-semibold text-xl mt-2 text-gray-600'>Send Message</h6>
          </div>
            </section>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 w-10/12 h-fit mx-auto my-auto py-10 xl:px-10 text-white  '>
            <input type="text" name='name' className='h-[50px] text-center focus:outline-none bg-transparent border-2 border-gray-700 rounded-md ' placeholder='Enter your name' autoComplete='off' required />
            <input type="email" name='email' className=' h-[50px] text-center  focus:outline-none bg-transparent border-2 border-gray-700 rounded-md ' placeholder='Enter your email' autoComplete='off'required  />
            <textarea name='message' rows="10" className=' focus:outline-none bg-transparent border-2 border-gray-700 ' placeholder='Message' required  />
            <button type="submit" className='bg-transparent rounded-full border-2 border-gray-800 w-[100px] h-[40px] mt-5 hover:bg-white hover:text-black transform hover:scale-90 transition ease-out  '>Submit</button>
          </form>
          </div>
          <div className=" md:hidden flex  lg:w-[300px] lg:h-[200px] bg-gray-900 object-cover shadow-xl shadow-black rounded-xl ">
           <a href="https://wa.me/7598483416" target="_blank" rel="noreferrer"className="mx-auto">
            <img src={whatsapp} alt="..." className='w-[40px] h-fit lg:w-[180px] mx-auto my-auto ' /></a>
            <a href="https://twitter.com/Pavanku29660177" target="_blank" rel="noreferrer"className="mx-auto">
            <img src={twitter} alt="..." className='w-[40px] h-fit lg:w-[180px] mx-auto my-auto animate-bounce' />
            </a>
            <a href="https://github.com/Pavana004" target="_blank" rel="noreferrer"className="mx-auto">
            <img src={git} alt="..." className='w-[40px] h-fit lg:w-[180px] mx-auto my-auto animate-bounce' />

            </a>
            
          
          </div>
        </div>


        </div>

    </div>
  )
}

export default Contacts