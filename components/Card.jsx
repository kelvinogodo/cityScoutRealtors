import React from 'react'
import Image from 'next/image'
import { motion} from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {IoIosHome} from 'react-icons/io'
import {ImLocation} from 'react-icons/im'
import {ImPriceTags} from 'react-icons/im'
// import required modules
import {EffectFade, Navigation, Pagination, } from "swiper";
import Parser from 'html-react-parser'
const Card = ({item,addedClass}) => {
  return (
        <motion.div layout className={`card ${addedClass}`} data-aos={'fade-up'}>
        <div className='card-swiper-cont'>
          <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={true}
        modules={[EffectFade,Navigation, Pagination,]}
        className="mySwiper card-swiper"
      >
        <SwiperSlide className='card-slider'>
          <Image src={`/${item.frontViewImage}`} alt="property image" placeholder='blur' className='card-img' width={350} priority height={230} blurDataURL={`/${item.frontViewImage}`} />  
        </SwiperSlide>
        <SwiperSlide className='card-slider'>
        <Image src={`/${item.sideViewImage}`} alt="property image" placeholder='blur' className='card-img' width={350} priority height={230} blurDataURL={`/${item.sideViewImage}`} />
        </SwiperSlide>
        <SwiperSlide className='card-slider'>
        <Image src={`/${item.backViewImage}`} alt="property image" placeholder='blur' className='card-img' width={350} priority height={230} blurDataURL={`/${item.backViewImage}`} />
        </SwiperSlide>
        </Swiper>
      </div>
            <div className="card-body blog-card-body">
              <div className="body-card">
                <span className='title'><IoIosHome /></span><span className='key'>{item.description}</span>
              </div>
              <div className="body-card">
                <span className='title'><ImLocation /></span><span className='key'>{item.location}</span>
              </div>
              <div className="body-card">
                <span className='title'><ImPriceTags /> </span><span className='key'>&#8358;{item.price}</span>
              </div>
              <Link href='/properties/[id]' as={`/properties/${item._id}`}  className='read-more-btn'>view more</Link>
            </div> 
        </motion.div>
  )
}

export default Card