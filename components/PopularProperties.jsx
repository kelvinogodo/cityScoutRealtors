import {motion,AnimatePresence} from 'framer-motion'
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Card from './Card'
const PopularProperties = ({properties}) => {
  return (
    <motion.div layout>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper popular-swiper"
      >
        {properties.map((item)=>(
        <SwiperSlide className='slide'>
          <AnimatePresence>
            <Card key={item.id} item={item} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='property-card'/>
          </AnimatePresence>
        </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}

export default PopularProperties