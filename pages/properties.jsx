import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from 'next/link'
import {BsSearch} from 'react-icons/bs'
import Card from '../components/Card'
import { useState } from 'react'
const properties = ({properties}) => {
  const [filter,setFilter]= useState(properties)
    
      const filterProperties = (title,keyword)=>{
        switch (title) {
          case 'location':
            setFilter(properties.filter(item => (item.location.trim().includes(keyword))))
            break;
          case 'price':
            setFilter(properties.filter(item => (item.price.trim().includes(keyword))))
            break;
          case 'description':
            setFilter(properties.filter(item => (item.description.trim().includes(keyword))))
            break;
        
          default:
            setFilter(properties)
            break;
        }
      }
  const [categories,setCategories] = useState([
    {
        id:1,
        title:'location',
        active:true,
        placeHolderText:'enter the location to search',
    },
    {
        id:2,
        title:'price',
        active:false,
        placeHolderText:'enter the price range to search',
    },
    {
        id:3,
        title:'description',
        active:false,
        placeHolderText:'enter the description to search',
    }
])
const [searchKeywords, setSearchKeywords] = useState() 
  return (
    <main className='property-page'>
      <section className="left-container-post-card property-landpage">
        <img src="/house (3).jpg" alt="" className='blog-img'/>
        <div className="blog-card-text-container property-landpage-container">
          <div className='landpage-body'>
            <article className="land-body-text-container">
              <h2>invest in real estate now!</h2>
              <p>search for a property below</p>
            </article>
            <section className={`search-input-container`}>
              <div className="sort-btn-container">
              {categories.map(category =>(<button key={category.id} className={`sort-btn ${category.active ? 'active' : ''}`} onClick={
                  ()=>{
                      setCategories(categories.map(button =>(button.id === category.id ? {...button,active:true} : {...button,active:false})))
                  }
              }>{category.title}</button>))}
              </div>
              {categories.map(category =>(
                  category.active && 
                  <div className="input-container">
                      <input type="text" className='search-input' placeHolder={`${category.placeHolderText}`} onChange={(e)=>{
                          setSearchKeywords(e.target.value.toLowerCase())
                          filterProperties(category.title,searchKeywords)
                      }}/>
                      <div className="search-icon-container">
                          <BsSearch className='search-icon'/>
                      </div>
                  </div>
              ))}  
            </section>
          </div>
        </div>
      </section>
      <section className="latest-property-section">
        <span className="featured-post-header">
         <span className="line"></span> <h2>latest properties</h2>
        </span>
        <div className='property-list blog-section'>
          {filter.map(item =>(
            <Card key={item._id} item={item} addedClass={'blog-card'}/>
          ))}
        </div>
      </section>  
    </main>
  )
}
export const getStaticProps = async () =>{
  const req = await fetch('http://localhost:3000/api/properties')
  const properties = await req.json()
  return{
    props:{
      properties
    }
  }
}
export default properties