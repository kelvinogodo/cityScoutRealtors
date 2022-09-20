import React from 'react'
import Image from 'next/image'
import { motion} from 'framer-motion'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import {IoIosHome} from 'react-icons/io'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";
import {ImLocation} from 'react-icons/im'
import {ImPriceTags} from 'react-icons/im'
const PopularCard = ({item}) => {
  return (
    <motion.div layout className={`card popular-card`} data-aos={'fade-up'}>
        <Link href='/properties/[id]' as={`/properties/${item._id}`}  className='popular-view-more'> </Link>
        <div className='card-swiper-cont'>
          <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          
        className="mySwiper card-swiper"
      >
        <div className="price-tag">
            <ImPriceTags />
            <div className='price-tag-conteiner'>
              <p>&#8358;</p>
              <p>{item.price}</p>
            </div>
          </div>
        <SwiperSlide className='card-slider '>
          <Image src={`/${item.frontViewImage}`} alt="property image" placeholder='blur' className='card-img' width={350} priority height={280} blurDataURL={`/${item.frontViewImage}`} />  
        </SwiperSlide>
        <SwiperSlide className='card-slider'>
        <Image src={`/${item.sideViewImage}`} alt="property image" placeholder='blur' className='card-img' width={350} priority height={280} blurDataURL={`/${item.sideViewImage}`} />
        </SwiperSlide>
        <SwiperSlide className='card-slider'>
        <Image src={`/${item.backViewImage}`} alt="property image" placeholder='blur' className='card-img' width={350} priority height={280} blurDataURL={`/${item.backViewImage}`} />
        </SwiperSlide>
        </Swiper>
      </div>
            <div className="card-body blog-card-body">
              <div className="body-card">
                <ImLocation />
                <p>{item.location}</p>
              </div>
              <div className="body-card">
                <IoIosHome />
                <p>{item.description}</p>
              </div>
            </div> 
        </motion.div>
  )
}

export default PopularCard