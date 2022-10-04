import {BsSearch} from 'react-icons/bs'
import { useState } from 'react'
import React, { useRef } from "react";
// Import Swiper React components
import {FaWindowClose} from 'react-icons/fa'
// Import Swiper styles
import "swiper/css";
const SearchInput = ({inputClass,filterProperties,properties}) => {
    const [categories,setCategories] = useState([
        {
            id:1,
            title:'location',
            active:true,
            placeHolderText:'search property by location',
        },
        {
            id:2,
            title:'price',
            active:false,
            placeHolderText:'search property by price',
        },
        {
            id:3,
            title:'description',
            active:false,
            placeHolderText:'search property by description',
        }
    ])
    const [searchKeywords, setSearchKeywords] = useState() 
    const [sortList, setSortList] = useState([])
    const [listTitle, setListTitle]= useState() 
    const getList =(title)=>{
        setListTitle(title)
        switch (title) {
            case 'location':
                setSortList(properties.map(property =>(property.location)))
                break;
            case 'price':
                setSortList(properties.map(property =>(property.price)))
                break;
            case 'description':
                setSortList(properties.map(property =>(property.description)))
                break;
        
            default:setSortList(properties)
                break;
        }
        console.log(sortList)
    }
  return (
    <section className={`search-input-container ${inputClass}`} data-aos={'fade-up'}>
        <div className="sort-btn-container">
        {categories.map(category =>(<button key={category.id} className={`sort-btn ${category.active ? 'active' : ''}`} onClick={
            ()=>{
                setCategories(categories.map(button =>(button.id === category.id ? {...button,active:true} : {...button,active:false})))
            }
        }>{category.title}</button>))}
        </div>
        {categories.map(category =>(
            category.active && 
            <div className="input-container" key={category.placeHolderText}>
                <input type="text" className='search-input' placeHolder={`${category.placeHolderText}`} onChange={(e)=>{
                    setSearchKeywords(e.target.value.toLowerCase())
                    filterProperties(category.title,searchKeywords)
                }} onFocus={()=>{getList(category.title)}}/>
                <div className="search-icon-container">
                    <BsSearch className='search-icon'/>
                </div>
            </div>
        ))}
        <section className="sort-list">
            <span className='sortlist-close-btn' onClick={()=> (setSortList([]))}>
                <FaWindowClose />
            </span>
            <div className="sort-list-container">
                {sortList.map(sort =>(<p key={sort.title} onClick={()=>{filterProperties(listTitle,sort)}}>{sort}</p>)) }
           </div>
        </section>
    </section>
  )
}

export default SearchInput