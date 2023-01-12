import React from 'react'
import Dp from "../assets/dp.jpg"
import Admin from "../assets/admin.png";
import youtube from "../assets/youtube.png";
import ecom from "../assets/e-com.png";


const Projects = () => {
    return (
        <div className='w-full h-full bg-gray-900' id='project'>
            <div className='container mx-auto pt-10 relative '>
                <button className='shadow-xl shadow-black rounded-2xl h-[70px]  w-48 animate-bounce text-gray-400 font-Oswald text-2xl font-bold hover:text-white mx-auto absoulte '>PROJECT</button>
                <div className='w-9/12 h-fit bg-gray-900 rounded-2xl shadow-2xl justify-between shadow-black flex top-10 mx-auto mt-20 text-white font-Oswald 
                transform hover:scale-90 transition ease-out duration-500 cursor-pointer  '>
                    <div className=' w-9/12 '>
                        <img src={Dp} alt='' className='h-full  lg:h-[250px] xl:h-full object-cover rounded-2xl' />
                    </div>
                    <div className='w-8/12  text-center text-sm lg:text-lg xl:text-xl absoulte top-0 bottom-0 mx-auto font-Oswald font-semibold lg:space-y-2 xl:space-y-4 px-3  '>
                        <h3>Project name : Multiverse</h3>

                        <h3>Project type : Web Application</h3>

                        <h3 >Project Description : OTT Platform here you can access different type of field like Movie,Music,Videos,Books.This project made by MERN stack.</h3>

                        <button className='bg-gray-900 shadow-xl shadow-black font-medium text-xl hover:bg-white hover:text-black rounded-xl w-20 h-10  transform hover:scale-90 transition ease-out mx-auto '>
                            <a href='https://multiverse.onrender.com' target="_blank" rel="noreferrer">Start Now</a>
                        </button>
                    </div>
                </div>
                <div className='w-9/12 h-fit bg-gray-900 rounded-2xl shadow-2xl justify-between shadow-black flex top-10 mx-auto mt-20  text-white font-Oswald 
                transform hover:scale-90 transition ease-in duration-500 cursor-pointer  '>
                    <div className=' w-9/12 '>
                        <img src={Admin} alt='' className='h-full  lg:h-[250px] xl:h-[300px] w-full object-cover rounded-2xl' />
                    </div>
                    <div className='w-8/12  text-center text-sm lg:text-lg xl:text-xl absoulte top-0 bottom-0 mx-auto font-Oswald font-semibold lg:space-y-4 xl:space-y-6 px-3  '>
                        <h3>Project name : Multiverse Admin</h3>
                        <h3>Project type : Web Application</h3>

                        <h3>Project Description : Here you can Upload Movie,Music,Videos,Books data for this project.This project made by MERN stack</h3>

                        <button className='bg-gray-900 shadow-xl shadow-black font-medium text-xl hover:bg-white hover:text-black rounded-xl w-20 h-10  transform hover:scale-90 transition ease-out mx-auto '>
                        <a href='https://multiverseadmin.netlify.app/' target="_blank" rel="noreferrer">Start Now</a>
                        </button>
                    </div>
                </div>
                <div className='w-9/12 h-fit bg-gray-900 rounded-2xl shadow-2xl justify-between shadow-black flex top-10 mx-auto mt-20  text-white font-Oswald 
                transform hover:scale-90 transition ease-in duration-500 cursor-pointer  '>
                    <div className=' w-9/12 '>
                        <img src={youtube} alt='' className='h-full  lg:h-[250px] xl:h-[300px] w-full object-cover rounded-2xl' />
                    </div>
                    <div className='w-8/12  text-center text-sm lg:text-lg xl:text-xl absoulte top-0 bottom-0 mx-auto font-Oswald font-semibold lg:space-y-4 xl:space-y-6 px-3  '>
                        <h3>Project name : Youtube UI</h3>
                        <h3>Project type : Web Application</h3>

                        <h3>Project Description : Here I Clone Youtube UI,Where as it use for user experince</h3>

                        <button className='bg-gray-900 shadow-xl shadow-black font-medium text-xl hover:bg-white hover:text-black rounded-xl w-20 h-10  transform hover:scale-90 transition ease-out mx-auto '>
                        <a href='https://strong-bonbon-be34f5.netlify.app/' target="_blank" rel="noreferrer">Start Now</a>
                        </button>
                    </div>
                </div>
                <div className='w-9/12 h-fit bg-gray-900 rounded-2xl shadow-2xl justify-between shadow-black flex top-10 mx-auto mt-20  text-white font-Oswald 
                transform hover:scale-90 transition ease-in duration-500 cursor-pointer  '>
                    <div className=' w-9/12 '>
                        <img src={ecom} alt='' className='h-full  lg:h-[250px] xl:h-[300px] w-full object-cover rounded-2xl' />
                    </div>
                    <div className='w-8/12  text-center text-sm lg:text-lg xl:text-xl absoulte top-0 bottom-0 mx-auto font-Oswald font-semibold lg:space-y-4 xl:space-y-6 px-3  '>
                        <h3>Project name : E-Commerce UI</h3>
                        <h3>Project type : Web Application</h3>

                        <h3>Project Description : Here I Clone product shopping UI,Where as it use for user experince</h3>

                        <button className='bg-gray-900 shadow-xl shadow-black font-medium text-xl hover:bg-white hover:text-black rounded-xl w-20 h-10  transform hover:scale-90 transition ease-out mx-auto '>
                        <a href='https://whimsical-kelpie-4b8f7d.netlify.app/' target="_blank" rel="noreferrer">Start Now</a>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects
