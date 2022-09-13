import {useState,useEffect,useRef} from 'react'
import {IoIosCreate} from 'react-icons/io'
import {MdPostAdd} from 'react-icons/md'
import {GiHouseKeys} from 'react-icons/gi'
import Card from './Card'
import BlogCard from './BlogCard'
import {RiDeleteBin2Line} from 'react-icons/ri'
import {RiFileEditLine} from 'react-icons/ri'
import TipTap from './TipTap'
const Overview = ({showOverview,showCreateSection,showEditSection,showCreatePropertySection,showEditPropertySection}) => {

  // posts and properties state managers 
  const [posts,setPosts]= useState() 
  const [properties,setProperties]= useState() 
  const fetchData = async ()=>{
    const [postRequest, propertyRequest] = await Promise.all ([
     fetch('http://localhost:3000/api/posts'),
     fetch('http://localhost:3000/api/properties')
    ])
    const [posts,propertiesArray] = await Promise.all ([
     postRequest.json(),
     propertyRequest.json()
    ]) 
    setPosts(posts)
    setProperties(propertiesArray)
    console.log(`${posts} ${propertiesArray}`)
  }
  useEffect(()=>{ 
    const admin = localStorage.getItem('user') 
    if(admin !== null){
        console.log('welcome admin')
    }
    else{
        window.location.href= '/admin'
    }
  fetchData()
  },[])
  const [postTitle,setPostTitle] = useState()
  const [postBody, setPostBody] = useState()
  const [postAuthor,setPostAuthor] = useState('ogodo dominic')
  const [postImage, setPostImage] = useState()
  const [postDate,setPostDate] = useState()
  const [postCategory,setPostCategory] = useState()

  const createPost = async (e)=>{
    e.preventDefault()
    const date = new Date().toLocaleDateString()
    setPostDate(date)
    const newPost = {
      title:`${postTitle}`,
      body:`${postBody}`,
      image:`${postImage}`,
      author:`${postAuthor}`,
      date:`${postDate}`,
      category:`${postCategory}`
    }
    const req = await fetch('http://localhost:3000/api/createPost',
    {
      method:'POST',
      headers:{
      'content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    }
    )
    const res = await req.json()
    console.log(res)
  }

  // property states 
  const [propertyDescription, setPropertyDescription] = useState()
  const [propertyLocation, setPropertyLocation] = useState()
  const [propertyPrice, setPropertyPrice] = useState()
  const [frontViewImage, setFrontViewImage] = useState()
  const [sideViewImage, setSideViewImage] = useState()
  const [backViewImage, setBackViewImage] = useState()

  // function for creating property 
  const createProperty = async (e)=>{
    e.preventDefault()
    const newProperty = {
      description:`${propertyDescription}`,
      location:`${propertyLocation}`,
      price:`${propertyPrice}`,
      frontViewImage: `${frontViewImage}`,
      sideViewImage:`${sideViewImage}`,
      backViewImage:`${backViewImage}`
    }
    const request = await fetch('http://localhost:3000/api/createProperty',
    {
      method:'POST',
      headers:{
        'content-Type':'application/json',
      },
      body: JSON.stringify(newProperty)
    }
    )
    const response = await request.json()
    console.log(response)
  }
  // delete post function 
  const deletePost = async (id)=>{
    const deleteRequest = await fetch(`http://localhost:3000/api/deletePost`,
    {
      method:'POST',
      headers:{
        'content-Type': 'application/json'
      },
      body: JSON.stringify({id:id})
    }
    )
    const deleteResponse = await deleteRequest.json()
    console.log(deleteResponse)
    fetchData()
  }
  // delete property function 
  const deleteProperty = async (id)=>{
    const deleteRequest = await fetch(`http://localhost:3000/api/deleteProperty`,
    {
      method:'POST',
      headers:{
        'content-Type': 'application/json'
      },
      body: JSON.stringify({id:id})
    }
    )
    const deleteResponse = await deleteRequest.json()
    console.log(deleteResponse)
    fetchData()
  }
  
  // post and prperty form state controlers 
  const [postEditForm,setPostEditForm] = useState(false)
  const [propertyEditForm,setPropertyEditForm] = useState(false)

  // edit post value state managers 
  const newPostTitle = useRef(null)
  const newPostBody = useRef(null)
  const [newPostImage, setNewPostImage] = useState()  
  const newPostauthor = useRef(null)
  const [newPostCategory,setNewPostCategory] = useState('normal')

  // edit property value state managers 
  const newPropertylocation = useRef()
  const newPropertyPrice = useRef()
  const newPropertyDescription = useRef()
  const newPropertyFrontImage = useRef()  
  const newPropertySideImage = useRef()
  const newPropertybackImage = useRef()

  const editPost = async (e)=>{
    e.preventDefault()
    const editedPost={
      title: newPostTitle.current.innerText,
      body: newPostBody.current.innerText,
      image: newPostImage,
      author:newPostauthor.current.innerText,
      category:newPostCategory,
    }
    console.log(editedPost)

    const editRequest = await fetch('http://localhost:3000/api/editPost',
    {
      method:'POST',
      headers:{
        'content-Type': 'application/json'
      },
      body:JSON.stringify({
        id:activePostId,
        title: editedPost.title,
        body:editedPost.body,
        author:editedPost.author,
        image:editedPost.image,
        category:editedPost.category
      }) 
    }
    )
    const postResponse = await editRequest.json() 
    console.log(postResponse)
    fetchData()
  }
  const [activePostId, setActivePostId] = useState()
  const [activePost,setActivePost] = useState()

  // post category state manager
  const [category,setCategory] = useState([
    {
      title:'normal',
      active:true
    },
    {
      title:'featured',
      active:false
    }
  ])

  return (
    <main className='overview-section'>
      {
        postEditForm &&
        <div className="edit-post-form-container"> 
        <form onSubmit={editPost} className='edit-post-form'>
          <p onClick={()=>{
            setPostEditForm(false)
          }}>x</p>
          <div contentEditable='true' ref={newPostTitle} className='edit-input'>{activePost ? activePost.title : 'edit title'}</div>
          <div contentEditable='true' ref={newPostBody}  className='edit-input'>{activePost ? activePost.body : 'edit post body'}</div>
          <div contentEditable='true' ref={newPostauthor}  className='edit-input'>{activePost ? activePost.author : 'edit author'}</div>
          <div className="category-btn-container">
          {
              category.map((categ,index) =>(
                <button key={index} onClick={()=>{
                  setNewPostCategory(categ.title)
                  setCategory(category.filter(cat =>(cat.title === categ.title ? {...cat, active:true} : {...cat, active:false}))) 
                }} className={`category-btn ${categ.active ? 'active' : ''}`}>{categ.title}</button>
              ))
          }
          </div>
          <input type="file" accept=".png,.jpg,.webp,.svg,.jpeg" className='file-upload-input'
               onChange={(e)=>{
                const image = e.target.files[0].name.toString()
                setNewPostImage(image)
              }}
          />
          <input type="submit" value="edit post" className='edit-submit-btn' />
        </form>
        </div>
      }
        {showOverview && 
          <section className='overview-page'>
            <div className="overview-card-container">
              <div className="overview-card">
                <IoIosCreate className='overview-icon'/>
                <h1>{posts ? posts.length : 35}</h1>
                <p>posts created</p>
              </div>
              <div className="overview-card">
                <MdPostAdd  className='overview-icon second'/>
                <h1>{properties ? properties.length : 30}</h1>
                <p>properties available</p>
              </div>
              <div className="overview-card ">
                <GiHouseKeys className='overview-icon third'/>
                <h1>20</h1>
                <p>properties</p>
              </div>
            </div>
          </section>}
        {showCreateSection && <section className='overview-page'>
          <form className="create-post-form" onSubmit={createPost}>
            <input type="text" placeHolder='post title'className='input' 
            onChange={(e)=>{
              const title = e.target.value.toString()
              setPostTitle(title)
            }}
            />
            <TipTap setPostBody={setPostBody}/>
            <input type="text" placeHolder='post author' className='input'
              onChange={(e)=>{
                const author = e.target.value.toString()
                setPostAuthor(author)
              }}
            />
            <input type="file" accept=".png,.jpg,.webp,.svg,.jpeg" className='file-upload-input'
               onChange={(e)=>{
                const image = e.target.files[0].name.toString()
                setPostImage(image)
              }}
            />
            {
              category.map((categ,index) =>(
              <div className="category-btn-container">  
                <button key={index} onClick={()=>{
                  setPostCategory(categ.title)
                  setCategory(category.filter(cat =>(cat.title == categ.title ? {...cat, active:true} : cat))) 
                }} clasName={`category-btn ${category.active ? 'active' : ''}`}>{categ.title}</button>
              </div>
              ))
            }
            <input type="submit" value="create" className='create-btn'/>
          </form>
        </section>}
        {showCreatePropertySection && 
          <section className='overview-page'>
            <form className="create-post-form" onSubmit={createProperty}>
            <input type="text" placeHolder='property price'className='input' onChange={(e)=>{
              const price  = e.target.value.toString()
              setPropertyPrice(price)
            }}/>
            <input type="text" placeHolder='property location' className='input' onChange={(e)=>{
              const location  = e.target.value.toString()
              setPropertyLocation(location)
            }} />
            <textarea type="text" placeHolder='property description' className='create-post-textarea' onChange={(e)=>{
              const description  = e.target.value.toString()
              setPropertyDescription(description)
            }}/>
            <label htmlFor="file-upload-input" className='label'>full view picture</label>
            <input type="file" accept=".png,.jpg,.webp,.svg,.jpeg" id="file-upload-input" className='file-upload-input' onChange={(e)=>{
              const frontImage  = e.target.files[0].name.toString()
              setFrontViewImage(frontImage)
            }}/>
            <label htmlFor="file-upload-input" className='label'>side view picture</label>
            <input type="file" accept=".png,.jpg,.webp,.svg,.jpeg" id="file-upload-input" className='file-upload-input' onChange={(e)=>{
              const sideImage  = e.target.files[0].name.toString()
              setSideViewImage(sideImage)}}/>
            <label htmlFor="file-upload-input" className='label'>side view picture</label>
            <input type="file" accept=".png,.jpg,.webp,.svg,.jpeg" id="file-upload-input" className='file-upload-input'onChange={(e)=>{
              const backImage  = e.target.files[0].name.toString()
              setBackViewImage(backImage)}} />
            <input type="submit" value="create property" className='create-btn'/>
          </form>
          </section>}
        {showEditSection && 
          <section className='overview-page dashboard-property-list'>
            {
              posts.map(post =>(
                <div className='edit-card' key={post._id}>
                  <div className="edit-icon-containers">
                    <RiFileEditLine className='edit-icon edit' onClick={()=>{
                      setActivePost({
                        title:post.title,
                        body:post.body,
                        image:post.image,
                        author:post.author,
                        // category:post.category
                      })
                      setPostEditForm(true)
                      setActivePostId(post._id)
                    }}/>
                    <RiDeleteBin2Line className='edit-icon' onClick={()=>{deletePost(post._id)}}/>
                  </div>
                  <BlogCard item={post} />
                </div>
                ))
            }
          </section>
          }
        {showEditPropertySection && 
          <section className='overview-page dashboard-property-list'>
            {
              properties.map(property => (
                <div className='edit-card' key={property._id}>
                  <div className="edit-icon-containers">
                    <RiFileEditLine className='edit-icon edit' />
                    <RiDeleteBin2Line className='edit-icon' onClick={()=>{
                      deleteProperty(property._id)
                    }}/>
                  </div>
                  <Card item={property} /> 
                </div>
              ))
            }
          </section>
          } 
    </main>
  )
}

export default Overview