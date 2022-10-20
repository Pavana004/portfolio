import React from 'react'
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import nodeCer from "../assets/Node-js-cer.png"
import aws from "../assets/Aws-Cer.png"
import bootstrap from "../assets/Bootstrap-Cer.png"
import css from "../assets/Css-Cer.png"
import DS from "../assets/DS-CER.png"
import FSD from "../assets/FSD.png"
import html from "../assets/html-Cer.png"
import js from "../assets/Js-Cer.png"
import mongo from "../assets/Mongo-Cer.png"
import sql from "../assets/Mysql-Cer.png"
import react from "../assets/React-Cer.png"
import ux from "../assets/ux.jpeg"


const Certification = () => {
    const data = [
        {
            id: 1,
            img: nodeCer
        },
        {
            id: 2,
            img: aws
        },
         {
            id: 3,
            img: bootstrap
        },
        {
            id: 4,
            img: css
        },
        {
            id: 5,
            img: DS
        },
        {
            id: 6,
            img: FSD
        },
        {
            id: 7,
            img: html
        },
        {
            id: 8,
            img: js
        },
        {
            id: 9,
            img: mongo
        },
        {
            id: 10,
            img: sql
        },
        {
            id: 11,
            img: react
        },
        {
            id: 12,
            img: ux
        },
    ]

    return (
        <div className='w-full h-full bg-gray-900 pt-20'>
            <div className='container mx-auto'>
                <button className='shadow-xl shadow-black rounded-2xl h-[70px]  w-48 animate-bounce text-gray-400 font-Oswald text-2xl font-bold hover:text-white mx-auto absoulte '>CERTIFICATE</button>


                <Swiper className='container mx-auto pt-20 '
                    modules={[Pagination, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 4500,
                        
                    }}

                >
                    {
                        data.map(({ img, id }) => {
                            return (
                                <SwiperSlide className='mx-auto top-0 bottom-0 pt-10 justify-center items-center'>
                                    <img src={img} alt="" className='w-1/2 h-fit justify-center my-auto mx-auto rounded-xl' />

                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </div>
    )
}

export default Certification