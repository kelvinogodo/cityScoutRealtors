import Link from "next/link"
import BlogCard from "../components/BlogCard"
import Image from 'next/image'
import {useState} from 'react'
const blog = ({featuredposts}) => {
    const [featuredpostArray,setFeaturedpostArray] = useState()
  return (
    <main className='blog-page'>
        <section className="featured-post-container">
            <article className="featured-post-text">
                <h1>discover the beauty of ebonyi state and real estate</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illo et accusamus ad, cupiditate explicabo suscipit omnis vel tenetur voluptatibus, </p>
                <Link href='#blog-posts'>
                    read more below
                </Link>
            </article>
            <div className="featured-post-image-container">
                <img src="/about.webp" alt="" priority/>
            </div>
        </section>
        <section className="featured-related-post-container">
            <div className="left-container">
                <span className="featured-post-header">
                    <span className="line"></span>
                    <h2>related posts</h2>
                </span>
                <div className="left-container-post-card" style={{position:'relative'}}>
                    <Image src="/hold.jpeg" alt="" className="blog-img" layout="fill" placeholder="blur" blurDataURL="/hold.jpeg"/>
                    <article className="blog-card-text-container">
                        <h1 className='article-title'>invest in real estate now</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, </p>
                        <Link href='#'> read more</Link>
                    </article>
                </div>
            </div>
            <div className="right-container">
                <div className="right-blog-card" style={{position:'relative'}}>
                    <Image src="/city.jpg" alt="" className="blog-img" layout="fill" placeholder="blur" blurDataURL="/city.jpg"/>
                    <article className="blog-card-text-container">
                        <h1 className='article-title'>invest in real estate now</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, </p>
                        <Link href='#'> read more</Link>
                    </article>
                </div>
                <div className="right-blog-card" style={{position:'relative'}}>
                <Image src="/nigerhouse8.jpg" alt="" className="blog-img" layout="fill" placeholder="blur" blurDataURL="/nigerhouse8.jpg" />
                    <article className="blog-card-text-container">
                        <h1 className='article-title'>invest in real estate now</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, </p>
                        <Link href='#'> read more</Link>
                    </article>
                </div>
            </div>
        </section>
        <section className='property-list blog-section blog-list' id='blog-posts'>
            {featuredposts.map(
            item =>  <BlogCard key={item.id} item ={item}/>
            )}
        </section>
        <section className="latest-post-section">
            <div className="latest-post-section-text-container">
                <h1>local building available</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat incidunt quia, quo enim sequi odit voluptatibus blanditiis doloribus praesentium tenetur.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, omnis.
                </p>
                <Link href='#'>read more</Link>
            </div>
            <div className="latest-post-section-img-container">
                <Image src="/bloghouse.jpg" alt="" width={500} height={450} blurDataURL="/bloghouse.jpg" placeholder="blur" priority />
            </div>
        </section>
    </main>
  )
}
export const getStaticProps = async ()=>{
    const req = await fetch('http://localhost:3000/api/posts')
    const featuredposts = await req.json()
    return{
        props:{
            featuredposts
        },
        revalidate:60,
    }
}
export default blog