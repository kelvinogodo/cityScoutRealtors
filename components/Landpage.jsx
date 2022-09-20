import Link from 'next/link'
import Image from 'next/image'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination} from "swiper";
const Landpage = () => {
  return (
        <section className='home-landpage'>
          <div className="land-wrap">
          <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper inner-landpage-section"
          >
            <SwiperSlide className='my-swiper-slide'>
              <Image layout='fill' alt='swiper slide image' src='/realestate (16).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
              <Image layout='fill' alt='swiper slide image' src='/realestate (2).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/realestate (17).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (7).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/realestate (7).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (8).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (5).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/realestate (13).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (6).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/realestate (6).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/complex (3).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (16).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (10).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (12).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (11).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (14).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (15).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (17).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (4).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (2).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (3).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
            <SwiperSlide>
            <Image layout='fill' alt='swiper slide image' src='/real (1).jpg' className='swiper-slide-img' priority/>
            </SwiperSlide>
          </Swiper>
        <div className="landpage-outer-section">
          <div className="landpage-text-container">
              <h1>
                  easiest way to find your dream property in ebonyi state.
              </h1>
              <h2>city scout reators connects you with verified and worthy properties for sale in ebonyi state.    
              </h2>
              <Link href='/properties'>explore</Link>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Landpage

