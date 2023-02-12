import React,{useState} from 'react'
import { Link } from 'react-scroll'
import resume from "../assets/Pavan resume.pdf"
import {FaBars,FaTimes} from "react-icons/fa"
import{MdDeveloperMode} from "react-icons/md"

const Nav = () => {
 const[nav,setNav]= useState(false);


  return (
    <nav className="bg-gray-900 w-full sticky z-10 top-0 font-Oswald">
    <div className='container mx-auto py-5 flex justify-between text-white'>
     <div className='items-center flex '>
       <MdDeveloperMode size={30} className="text-gray-300"/>
        <span className='text-gray-400  text-xl font-semibold text-center cursor-pointer hover:text-white '>Pavan kumar</span>
     </div>
      <ul className='hidden md:flex space-x-10 text-gray-400 text-md items-center font-semibold'>
        <li className='cursor-pointer hover:text-white '>
            <Link to='about'smooth duration={500}>ABOUT</Link>
        </li>
        <li className='cursor-pointer hover:text-white'>
            <Link to='skill'smooth duration={500}>SKILLS</Link>
        </li>
        <li className='cursor-pointer hover:text-white'>
            <Link to='project'smooth duration={500}>PROJECT</Link>
        </li>
        <li className='cursor-pointer hover:text-white'>
            <Link to='contact'smooth duration={500}>CONTACT</Link>
        </li>
        <li className='cursor-pointer hover:text-white'>
            <a href="https://drive.google.com/file/d/1joSYqwzmPdFyHExvHMrtVQT5aOA94i6W/view?usp=sharing" download>RESUME</a>
        </li>
      </ul>
       <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 text-gray-400 md:hidden' >
      {
        nav ? <FaTimes size={30}/> :  <FaBars size={20} />
      }
   
    </div>
    {nav &&(
    <ul className='justify-center top-0 bottom-0 absolute  bg-gray-800 gap-3 w-full h-[250px] px-5  items-center flex flex-col border-2 border-black  '>
      <li className='cursor-pointer hover:text-white'>
            <Link to='about'smooth duration={500}>ABOUT</Link>
        </li>
        <li className='cursor-pointer hover:text-white'>
            <Link to='skill'smooth duration={500}>SKILLS</Link>
        </li>
        <li className='cursor-pointer hover:text-white'>
            <Link to='project'smooth duration={500}>PROJECT</Link>
        </li>
        <li className='cursor-pointer hover:text-white'>
            <Link to='contact'smooth duration={500}>CONTACT</Link>
        </li>
        <li className='cursor-pointer hover:text-white'>
            <a href={resume} download>RESUME</a>
        </li>
       
       <FaTimes size={25} onClick={()=>setNav(false)} className="bg-gray-800 rounded-xl text-black"/>
      </ul>
     )}
    </div>
   
      
    </nav>
  )
}

export default Nav
