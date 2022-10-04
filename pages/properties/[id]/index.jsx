import Head from "next/head"
import Link from "next/link"
const Properties = ({property}) => {
  return (
    <main className='page-container'>
      <Head>
        <title>{property.title}</title>
        <meta name="description" content={`${property.title}`} />
        <meta name="author" content='ogodo dominic' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-header" style={{backgroundImage:'url(/realestate (16).jpg)'}}>
      </div>
      <section className='page'>    
          <div className="left-description-body">
            <img src={`/${property.frontViewImage}`} alt="" className="upper-grid" />
            <div className="lower-grid">
              <img src={`/${property.sideViewImage}`} alt=""></img>
              <img src={`/${property.backViewImage}`} alt=""></img>
            </div>
          </div>
          <div className="right-description-body">
            <div className="agent-info-header">
              <h4>property information</h4>
            </div>
            <div className="description-card">
              <span className='key'>property location :</span><span className='value'>{property.location}</span>
            </div>
            <div className="description-card">
              <span className='key'> property description :</span><span className='value'>{property.description}</span>
            </div>
            <div className="description-card">
              <span className='key'> property price :</span><span className='value'>{property.price}</span>
            </div>
            <div className="agent-info">
              <div className="agent-info-header">
                <h4>contact an agent</h4>                
              </div>
              <div className="description-card">
                <span className='key'>mobile</span><span className='value'>07042244530</span>
              </div>
              <div className="description-card">
              <span className='key'>email</span><span className='value'>kelvinchukwuebuka@gmail.com</span>
              </div>
            </div>
            <div className="description-card">
              <Link href='/properties'>back to home</Link>
            </div>
          </div>
      </section>
    </main>
  )
}
export const getStaticProps = async (context)=>{
    const id = context.params.id
    const req = await fetch(`http://localhost:3000/api/properties/${id}`)
    const property = await req.json()
    return{
      props:{
        property
      }
    }
  }
  export const getStaticPaths = async()=>{
    const req = await fetch(`http://localhost:3000/api/properties`)
    const properties = await req.json()
    const ids = properties.map(post =>(post._id))
    const paths = ids.map(id =>({params : {id : id.toString()}}))
    return{
      paths,
      fallback:false,
    }
  }
  
export default Properties

