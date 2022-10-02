import React from 'react'
import Link from 'next/link'
import {AiOutlineArrowRight} from 'react-icons/ai'
const SeeAll = ({link, text}) => {
  return (
    <div className='see-all-container'>
      <span className='see-all-link-container'>
        <Link href={`${link}`}>
           {text}
        </Link>
        <AiOutlineArrowRight className='right-arrow'/>
      </span>
    </div>
  )
}

export default SeeAll