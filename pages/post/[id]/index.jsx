import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Parser from 'html-react-parser'
const Posts = ({post}) => {
  return (
    <main className='page-container'>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`${post.title}`} />
        <meta name="author" content='ogodo dominic' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="blog-header">
        <Link href='/blog'>blog</Link>
        <span>/</span>
        <Link href='/'> home</Link>
      </section>
      <section className="post-container">
        <div className="post-img-container" style={{position:'relative'}}>
          <Image src={`/${post.image}`} alt={`${post.title} image`} layout='fill' priority placeHolder='blur' blurDataURL={`/${post.image}`}  />
        </div>
        <div className="post-text-container">
          <h1>{post.title}</h1>
          <div className="ProseMirror">
            {Parser(post.body)}
          </div>
          <span className="post-date-container">
            <p>posted : {post.date}</p>
          </span>
          <p>author: {post.author}</p>
        </div>
      </section>
    </main>
  )
}
export const getStaticProps = async (context)=>{
  const id = context.params.id
  try{
    const req = await fetch(`http://localhost:3000/api/posts/${id}`)
    const post = await req.json()
    console.log(post)
    return{
      props:{
        post
      }
    }
  }
  catch(error){
    console.log(error)
  };
  
}
export const getStaticPaths = async()=>{
  const req = await fetch(`http://localhost:3000/api/posts`)
  const posts = await req.json()
  const ids = posts.map(post =>(post.title))
  const paths = ids.map(id =>({params : {id : id.trim()}}))
  return{
    paths,
    fallback:false,
  }
}
export default Posts



