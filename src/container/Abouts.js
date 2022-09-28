import React from 'react'
import pk from "../assets/pk.png"

const Abouts = () => {
  return (
    <div className='w-full h-full bg-gray-900' id='about'>
      <div className='container mx-auto py-5 relative'>
        <div className='w-10/12 h-[300px]   sm:left-0 flex justify-between font-Oswald font-bold text-sm lg:text-2xl md:text-xl  bg-gray-900 rounded-2xl shadow-2xl shadow-black absoulte bottom-0 right-0 mx-auto mt-5
        transform hover:scale-90 transition ease-in duration-500 cursor-pointer '>
          <h2 className='text-white text-center py-20 xl:py-24  lg:py-40 xl:ml-10 ml-2  ' >Hi This is Pavan </h2>
          <h2 className='text-white text-center py-20  xl:py-24 lg:py-40' > I'M A Full Stack Web Developer </h2>
          <img src={pk} alt="..." className='object-cover  lg:h-full md:h-full h-[200px] ' />
        </div>
        <br />
        <br />
        <br />
        <br />
        <button className='shadow-xl shadow-black rounded-2xl h-[70px]  w-48 animate-bounce text-gray-400 font-Oswald text-2xl font-bold hover:text-white mx-auto absoulte'>ABOUT ME</button>
        <div className=' w-6/12  h-[300px] flex flex-col  font-Oswald font-bold text-sm lg:text-2xl md:text-lg  bg-gray-900 rounded-2xl shadow-2xl shadow-black ml-auto mr-20 my-auto text-gray-200 text-center hover:text-gray-400 cursor-pointer   '>
          <p className='absoulte top-0 left-0 bottom-0 space-y-10 px-5 py-10 '>I'm a full stack web developer and desinging new features from ideation to production,implementation of wireframes and design flows in my web application.I take into consideration the user experience while writing reusable and efficiebt code,I passionately combine good design,technology,and innovation in all my project  </p>
        </div>
      </div>
    </div>
  )
}

export default Abouts