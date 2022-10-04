import Link from "next/link"
import BlogCard from "../components/BlogCard"
import Image from 'next/image'
import {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import PopularHeader from '../components/PopularHeader'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Parser from 'html-react-parser'
import { Autoplay, Pagination} from "swiper";

const blog = ({featuredposts}) => {
    const [featuredpostArray,setFeaturedpostArray] = useState(featuredposts.filter(post =>(post.category == 'featured' && post)))
  return (
    <main className='blog-page'>
        <section className="featured-post-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper blog-swiper"
          >
            { featuredposts ? featuredposts.slice(featuredposts.length-5,featuredposts.length).reverse().map(featured => (
                <SwiperSlide className='blog-slide' key={featured._id}>
                <div className="featured-post-text">
                    <h1>{featured.title}</h1>
                    <div className='ProseMirrow featured-post-body'>
                        {
                            Parser(featured.body.slice(0,200))
                        }
                    </div>
                    <Link href='/post/[id]' as={`/post/${featured.title}`}>
                        read more 
                    </Link>
                </div>
                <div className="featured-post-image-container">
                    <img src={`/${featured.image}`} alt="featured post image" priority/>
                </div>
                </SwiperSlide>
            )) : ''
            }
          </Swiper>
        </section>
        <section className="featured-related-post-container">
            <div className="left-container">
                <span className="featured-post-header">
                    <span className="line"></span>
                    <h2>related posts</h2>
                </span>
                {
                    featuredposts ? featuredposts.slice(featuredposts.length-2,featuredposts.length-1).reverse().map(related => (
                    <div key={related._id} className="left-container-post-card" style={{position:'relative'}}>
                    <Image src={`/${related.image}`} alt="related post image" className="blog-img" layout="fill" placeholder="blur" blurDataURL={`/${related.image}`}/>
                    <div className="blog-card-text-container">
                        <h1 className='article-title'>{related.title}</h1>
                        <div className='featured-post-body'>
                            {
                                Parser(related.body.slice(0,80))
                            }
                        </div>
                        <Link href='/post/[id]' as={`/post/${related.title}`}> read more</Link>
                    </div>
                </div>
                )) : ''
                }
            </div>
            <div className="right-container">
            { featuredposts ? featuredposts.slice(featuredposts.length - 4,featuredposts.length-2).map(featured => (
                <div key={featured._id} className="right-blog-card" style={{position:'relative'}}>
                    <Image src={`/${featured.image}`} alt="realted post image" className="blog-img" layout="fill" placeholder="blur" blurDataURL={`/${featured.image}`}/>
                    <div className="blog-card-text-container">
                        <h1 className='article-title'>{featured.title}</h1>
                        <div className='featured-post-body'>
                            {
                                Parser(featured.body.slice(0,80))
                            }
                        </div>
                        <Link href='/post/[id]' as={`/post/${featured.title}`}> read more</Link>
                    </div>
                </div>
             )) : ''}
            </div> 
        </section>
        <PopularHeader text={'blog posts'}/>
        <section className='property-list blog-section blog-list' id='blog-posts'>
            {featuredposts.map(
            item =>  <BlogCard key={item._id} item ={item}/>
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