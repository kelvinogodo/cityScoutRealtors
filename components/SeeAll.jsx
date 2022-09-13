import React from 'react'
import Link from 'next/link'
import {AiOutlineArrowRight} from 'react-icons/ai'
const SeeAll = ({link, text}) => {
  return (
    <div className='see-all-container'>
      <a>
        <Link href={`${link}`}>
           {text}
        </Link>
        <AiOutlineArrowRight className='right-arrow'/>
      </a>
    </div>
  )
}

export default SeeAll