import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {AiTwotoneCalendar} from 'react-icons/ai'
import Image from 'next/image'
import Parser from 'html-react-parser'
const BlogCard = ({item}) => {
  const shortBody = (item.body).slice(0,80)
  const splitBody = Parser(shortBody)
  return (
    <motion.div layout className="card blog-card" data-aos={'fade-up'}>
        <Image src={`/${item.image}`} alt="blog-card-image" className='card-img'  width={350} priority height={230} blurDataURL={`/${item.image}`} placeholder='blur' />
        <div className="card-body blog-card-body ProseMirror">
            <h1>{item.title}</h1>
            <div className='blog-body proseMirrow'>{splitBody}...</div>
            <div className="date-container">
              <AiTwotoneCalendar className='calender-icon'/>
              <p>{item.date}</p>
            </div>
              <Link href='/post/[id]' as={`/post/${item.title}`}>
                read more
              </Link>
        </div> 
    </motion.div>
  )
}

export default BlogCard