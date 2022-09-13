import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {AiTwotoneCalendar} from 'react-icons/ai'
import Image from 'next/image'
const BlogCard = ({item}) => {
  const shortBody = item.body.split("")
  const splitBody = shortBody.slice(0,80)
  return (
    <motion.div layout className="card blog-card">
        <Image src={`/${item.image}`} alt="blog-card-image" className='card-img'  width={350} priority height={230} blurDataURL={`/${item.image}`} placeholder='blur' />
        <div className="card-body blog-card-body">
            <h1>{item.title}</h1>
            <h2 className='blog-body'>{splitBody}...</h2>
            <div className="date-container">
              <AiTwotoneCalendar className='calender-icon'/>
              <p>{item.date}</p>
            </div>
              <Link href='/post/[id]' as={`/post/${item._id}`}>
                read more
              </Link>
        </div> 
    </motion.div>
  )
}

export default BlogCard