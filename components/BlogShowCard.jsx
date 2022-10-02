import Link from 'next/link'
const BlogShowCard = () => {
  return (
    <section className='blog-show-card' data-aos={'fade-up'}>
        <div className="blog-show-card-text-container">
          <h1>
            have a property in ebonyi state for sale ?
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rerum nesciunt deserunt, facilis eos harum ullam sint adipisci praesentium animi fugit voluptates et placeat autem omnis est unde repellendus itaque!</p>
          <Link href="/contact" className="sort-btn">
            let us know
          </Link>
        </div>
        <img src="/realestate (17).jpg" alt="" className="blog-show-card-img" /> 
    </section>
  )
}

export default BlogShowCard