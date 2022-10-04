import {motion,AnimatePresence} from 'framer-motion'
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import PopularCard from './PopularCard'
const PopularProperties = ({properties}) => {
  return (
    <motion.div layout className='desktop-popular-list'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper popular-swiper"
      >
        {properties.slice(properties.length - 4, properties.length).reverse().map((item)=>(
        <SwiperSlide className='slide' key={item.id}>
          <AnimatePresence>
            <PopularCard item={item} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='property-card'/>
          </AnimatePresence>
        </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}

export default PopularProperties