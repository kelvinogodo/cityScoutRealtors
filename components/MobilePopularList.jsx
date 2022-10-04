import React from 'react'
import PopularCard from './PopularCard'
import {motion,AnimatePresence} from 'framer-motion'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const MobilePopularList = ({properties}) => {
  return (
    <motion.div layout className='mobile-popular-list'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper mobile-popular-swiper"
      >  
        {properties.slice(properties.length - 4, properties.length).reverse().map((item)=>(
        <SwiperSlide className='mobile-popular-swiper-slide' key={item.id}>
          <AnimatePresence>
            <PopularCard  item={item} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='property-card'/>
          </AnimatePresence>
        </SwiperSlide>
        ))}
    </Swiper>
    </motion.div>
  )
}

export default MobilePopularList