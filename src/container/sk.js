import React from 'react'
import ReactImg from "../assets/react.png"
import mongo from "../assets/mongodb.png"
import node from "../assets/node.png"
import express from "../assets/express.png"
import Bootstrap from "../assets/Bootstrap.png"
import tailwind from "../assets/tailwind.png"
import figma from "../assets/figma.png"
import js from "../assets/js.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import aws from "../assets/aws.png"
import heroku from "../assets/heroku.png"
import netlify from "../assets/netlify.png"
import git from "../assets/git.png"

const Skills = () => {
  return (
     <div className='w-full h-full bg-gray-900'id='skill'>
        <div className='container mx-auto relative pt-10'>
        <button className='shadow-xl shadow-black rounded-2xl h-[70px]  w-48 animate-bounce text-gray-400 font-Oswald text-2xl font-bold hover:text-white mx-auto absoulte'>SKILLS</button>
           <div className='w-full h-full   grid grid-cols-3 gap-10  justify-center items-center mt-10 lg:px-10 lg:py-20  xl:px-40 xl:py-20 animate-pulse  '>
             <div className=' w-[100px] h-[100px]  lg:w-[300px] lg:h-[200px]  bg-gray-900 object-cover shadow-xl shadow-black rounded-xl my-auto  '>
                <img src={mongo} alt="..." className=' mx-auto'/>
             </div>
             <div className=' w-[100px] h-[100px]  lg:w-[300px] lg:h-[200px] bg-gray-900 object-cover shadow-xl shadow-black rounded-xl    '>
                <img src={ReactImg} alt="..." className='w-[80px] lg:w-[200px] mx-auto'/>
             </div>
             <div className=' w-[100px] h-[100px]  lg:w-[300px] lg:h-[200px] bg-gray-900 object-cover shadow-xl shadow-black rounded-xl   '>
                <img src={express} alt="..." className='w-[100px] lg:w-[200px] mx-auto my-auto'/>
             </div>
             <div className=' w-[100px] h-[100px]   lg:w-[300px] lg:h-[200px] bg-gray-900 object-cover shadow-xl shadow-black rounded-xl  '>
                <img src={node} alt="..."className='mx-auto mt-5'/>
             </div>
             <div className='  w-[100px] h-[100px]   lg:w-[300px] lg:h-[200px] bg-gray-900 object-cover shadow-xl shadow-black rounded-xl  '>
                <img src={Bootstrap} alt="..." className='w-[60px] lg:w-[180px] mx-auto mt-7'/>
             </div>
             <div className='  w-[100px] h-[100px]   lg:w-[300px] lg:h-[200px] bg-gray-900 object-cover shadow-xl shadow-black rounded-xl  my-auto '>
                <img src={tailwind} alt="..."className='w-[100px] lg:w-[200px] mx-auto my-auot'/>
             </div>
             <div className='  w-[100px] h-[100px]   lg:w-[300px] lg:h-[200px] bg-gray-900 object-cover shadow-xl shadow-black rounded-xl   my-auto '>
                <img src={figma} alt="..."className='w-[60px] lg:w-[180px] mx-auto xl:mt-5'/>
             </div>
             <div className='  w-[100px] h-[100px]   lg:w-[300px] lg:h-[200px] bg-gray-900 object-cover shadow-xl shadow-black rounded-xl   my-auto '>
                <img src={js} alt="..."className='w-[60px] lg:w-[150px] mx-auto lg:mt-5 xl:mt-7'/>
             </div>
             <div className='  w-[100px] h-[100px]   lg:w-[300px] lg:h-[200px] bg-gray-900 object-cover shadow-xl shadow-black rounded-xl   my-auto '>
                <img src={html} alt="..."className='w-[60px] lg:w-[180px] mx-auto xl:mt-5'/>
             </div>
             <div className='  w-[100px] h-[100px]   lg:w-[300px] lg:h-[200px] bg-gray-900 object-cover shadow-xl shadow-black rounded-xl   my-auto '>
                <img src={css} alt="..."className='w-[60px] lg:w-[180px] mx-auto xl:mt-5'/>
             </div>
             <div className='  w-[100px] h-[100px]   lg:w-[300px] lg:h-[200px] bg-gray-900 object-cover shadow-xl shadow-black rounded-xl   my-auto '>
                <img src={aws} alt="..."className='w-[60px] lg:w-[150px] mx-auto lg:mt-11'/>
             </div>
             <div className='  w-[100px] h-[100px]   lg:w-[300px] lg:h-[200px] bg-gray-900 object-cover shadow-xl shadow-black rounded-xl   my-auto '>
                <img src={heroku} alt="..."className='w-[60px] lg:w-[150px] mx-auto lg:mt-8 '/>
             </div>
             <div className='  w-[100px] h-[100px]   lg:w-[300px] lg:h-[200px] bg-gray-900 object-cover shadow-xl shadow-black rounded-xl   my-auto '>
                <img src={netlify} alt="..."className='w-[60px] lg:w-[150px] mx-auto lg:mt-8 '/>
             </div>
             <div className='  w-[100px] h-[100px]   lg:w-[300px] lg:h-[200px] bg-gray-900 object-cover shadow-xl shadow-black rounded-xl   my-auto '>
                <img src={git} alt="..."className='w-[60px] lg:w-[140px] mx-auto lg:mt-8 '/>
             </div>
           </div>
        </div>

     </div>
    
  )
}

export default Skills