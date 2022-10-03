import BlogCard from './BlogCard'
const BlogSection = ({posts}) => {
  return (
    <section className='property-list blog-section'>
        {posts.slice(posts.length - 4, posts.length).reverse().map(
          item =>  <BlogCard key={item.id} item ={item}/>
        )}
    </section>
  )
}

export default BlogSection