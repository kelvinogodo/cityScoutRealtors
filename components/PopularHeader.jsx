import React from 'react'

const PopularHeader = ({text}) => {
  return (
    <section className='popular-header' data-aos={'fade-up'}>
        <span className="short-popular-line"></span>
        <h2>{text}</h2>
        <span className="long-popular-line"></span>
    </section>
  )
}

export default PopularHeader