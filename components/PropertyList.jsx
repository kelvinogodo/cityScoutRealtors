import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card'
import Link from 'next/link'
const PropertyList = ({properties}) => {
  return (
      <motion.section layout initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='property-list'>
        <AnimatePresence>
          {properties.slice(properties.length - 6, properties.length).reverse().map(item => <Card item={item} key={item._id} addedClass={'blog-card'}/>)}
        </AnimatePresence>
      </motion.section>
  )
}

export default PropertyList