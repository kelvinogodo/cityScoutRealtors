import React from 'react'
import Image from 'next/image'
import { motion} from 'framer-motion'
import Link from 'next/link'
const Card = ({item,addedClass}) => {
  return (
        <motion.div layout className={`card ${addedClass}`}>
            <Image src={`/${item.frontViewImage}`} alt="property image" placeholder='blur' className='card-img' width={350} priority height={230} blurDataURL={`/${item.frontViewImage}`} />
            <div className="card-body blog-card-body">
              <div className="body-card">
                <span className='title'>Descrition:</span><span>{item.description}</span>
              </div>
              <div className="body-card">
                <span className='title'>Location:</span><span>{item.location}</span>
              </div>
              <div className="body-card">
                <span className='title'>price: </span><span>#{item.price}</span>
              </div>
              <Link href='/properties/[id]' as={`/properties/${item._id}`}  className='read-more-btn'>view more</Link>
            </div> 
        </motion.div>
  )
}

export default Card