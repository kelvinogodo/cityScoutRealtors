import React from 'react'
import Head from 'next/head'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdUpdate} from 'react-icons/md'
import {AiOutlineSafety} from 'react-icons/ai'
import {GiProgression} from 'react-icons/gi'
import {FaCity} from 'react-icons/fa'
const service = () => {
  return (
    <main className='service-page'>
      <Head>
        <title>
          real estate brokerage and development
        </title>
        <meta name="description" content="a property agency website, for properties around ebonyi state, Nigeria" />
        <link rel="icon" href="/cityScoutlogo.png" />
      </Head>
      <section className="service-landpage">
        <div className="service-landpage-text-container">
          <h1>services we offer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dignissimos harum consectetur obcaecati, necessitatibus molestiae! Molestiae deleniti provident laborum labore amet facilis, totam, quis doloribus ipsum animi accusamus vitae nemo?</p>
        </div>
      </section>
      <section className="service-card-container">
        <div className="service-card">
          <GiProgression />
          <h2>property brokerage</h2>
          <p>
            acquiring the right property can be daunting. our goal is to take that stress off your shoulder and help you find the best property which meets your investment target
          </p>
        </div>
        <div className="service-card">
          <FaCity />
          <h2>real estate development</h2>
          <p>
            property development becomes easier with professionals. we have a team of architects, surveyors, and engineers who will drive qaulity development of your lands and buildings for higher economic values
          </p>
        </div>
      </section>
    </main>
  )
}

export default service