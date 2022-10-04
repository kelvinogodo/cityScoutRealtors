import {useState,useEffect,useRef} from 'react'
import {FaWindowClose} from 'react-icons/fa'
import {IoIosCreate} from 'react-icons/io'
import {MdPostAdd} from 'react-icons/md'
import {GiHouseKeys} from 'react-icons/gi'
import Image from 'next/image'
import Card from './Card'
import BlogCard from './BlogCard'
import {RiDeleteBin2Line} from 'react-icons/ri'
import {RiFileEditLine} from 'react-icons/ri'
import TipTap from './TipTap'
import parser from 'html-react-parser'
import Swal from 'sweetalert2'
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

  const createPost = async ()=>{
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
    switch (res) {
      case 'created':
        Swal.fire(
          'congrats',
          'post successfully created ',
          'success'
        )
        break;
    
      default: Swal.fire(
        'warning',
        'something went wrong ',
        'warning'
      )
        break;
    }
    fetchData()
  }

  // property states 
  const [propertyDescription, setPropertyDescription] = useState()
  const [propertyLocation, setPropertyLocation] = useState()
  const [propertyPrice, setPropertyPrice] = useState()
  const [frontViewImage, setFrontViewImage] = useState()
  const [sideViewImage, setSideViewImage] = useState()
  const [backViewImage, setBackViewImage] = useState()
  const [propertyType, setPropertyType] = useState()

  // function for creating property 
  const createProperty = async ()=>{
    const newProperty = {
      description:`${propertyDescription}`,
      location:`${propertyLocation}`,
      price:`${propertyPrice}`,
      frontViewImage: `${frontViewImage}`,
      sideViewImage:`${sideViewImage}`,
      backViewImage:`${backViewImage}`,
      type:propertyType,
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
    switch (response.status) {
      case 200:
        Swal.fire(
          'congrats',
          'property successfully created ',
          'success'
        )
        break;
    
      default: Swal.fire(
        'warning',
        'something went wrong ',
        'warning'
      )
        break;
    }
    fetchData()
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
    switch (deleteResponse.status) {
      case 200:
        Swal.fire(
          'congrats',
          'post successfully deleted ',
          'success'
        )
        break;
    
      default: Swal.fire(
        'warning',
        'something went wrong ',
        'warning'
      )
        break;
    }
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
    switch (deleteResponse.status) {
      case 200:
        Swal.fire(
          'congrats',
          'property successfully deleted ',
          'success'
        )
        break;
    
      default: Swal.fire(
        'warning',
        'something went wrong ',
        'warning'
      )
        break;
    }
    fetchData()
  }
  
  // post and prperty form state controlers 
  const [postEditForm,setPostEditForm] = useState(false)
  const [propertyEditForm,setPropertyEditForm] = useState(false)

  // edit post value state managers 
  const newPostTitle = useRef(null)
  const [newPostBody,setNewPostBody] = useState()
  const [newPostImage, setNewPostImage] = useState()  
  const [newPostCategory,setNewPostCategory] = useState('normal')

  // edit property value state managers 
  const newPropertyLocation = useRef(null)
  const newPropertyPrice = useRef(null)
  const [newPropertyDescription,setNewPropertyDescription] = useState()
  const [newPropertyFrontViewImage,setNewPropertyFrontViewImage] =useState()  
  const [newPropertySideViewImage,setNewPropertySideViewImage] = useState()
  const [newPropertyBackViewImage,setNewPropertyBackViewImage] = useState()

  const [activePropertyId, setActivePropertyId] = useState()

  const editProperty = async (e)=>{
    e.preventDefault()
    const req = await fetch('http://localhost:3000/api/editProperty',
    {
      method: 'POST',
      headers :{
        'content-Type': 'application/json'
      },
      body : JSON.stringify({
        id:activePropertyId,
        price: newPropertyPrice.current.innerText,
        description: newPropertyDescription,
        location: newPropertyLocation.current.innerText,
        frontViewImage : newPropertyFrontViewImage,
        sideViewImage : newPropertySideViewImage,
        backViewImage : newPropertyBackViewImage,
      })
    }
    )
    const res = req.json()
    switch (res.status) {
      case 200:
        Swal.fire(
          'congrats',
          'property successfully updated ',
          'success'
        )
        break;
    
      default: Swal.fire(
        'warning',
        'something went wrong ',
        'warning'
      )
        break;
    }
    fetchData()
  }
  const [activeProperty,setActiveProperty] = useState()
  const editPost = async (e)=>{
    e.preventDefault()
    const editedPost={
      title: newPostTitle.current.innerText,
      body: newPostBody,
      image: newPostImage,
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
        image:editedPost.image,
        category:editedPost.category
      }) 
    }
    )
    const postResponse = await editRequest.json() 
    switch (postResponse.status) {
      case 200:
        Swal.fire(
          'congrats',
          'post successfully updated ',
          'success'
        )
        break;
    
      default: Swal.fire(
        'warning',
        'something went wrong ',
        'warning'
      )
        break;
    }
    fetchData()
  }
  const [activePostId, setActivePostId] = useState()
  const [activePost,setActivePost] = useState()

  // post category state manager
  const [category,setCategory] = useState([
    {
      id:1,
      title:'normal',
      active:true,
    },
    {
      id:2,
      title:'featured',
      active:false,
    }
  ])
 
  const [uploadImage,setUploadImage] = useState()

  const uploadFile = async ()=>{
    const formData = new FormData
    formData.append('theFiles',uploadImage)
    console.log(uploadImage)
    const req = await fetch('http://localhost:3000/api/upload',
    {
      method:'POST',
      body:formData
    }
    )
    const res = req.json()
    console.log(res)
  }
  const [propertyImages, setPropertyImages] = useState([])
  const uploadPropertyImages = async () =>{
    const formData = new FormData
    propertyImages.forEach(file =>{
      formData.append('theFiles',file)
    } )
    console.log(uploadImage)
    const req = await fetch('http://localhost:3000/api/uploadPropertyImages',
    {
      method:'POST',
      body:formData
    }
    )
    const res = req.json()
    console.log(res)
  }
  const [propertyTypes,setPropertyTypes] = useState([
    {
      id:1,
      title:'land',
      active:false,
    },
    {
      id:2,
      title:'house',
      active:false,
    },
  ])
  return (
    <main className='overview-section'>
      {
        postEditForm &&
        <section className='post-view-section'>
        <div className="form-view">
        <span className='sortlist-close-btn'onClick={()=>{
            setPostEditForm(false)
        }}>
            <FaWindowClose />
        </span>
        <form className="create-post-form" onSubmit={editPost}>
        <div contentEditable='true' ref={newPostTitle} className='edit-input'>{activePost ? activePost.title : 'edit title'}</div>
          <div className="tiptap-container">
            <TipTap setPostBody={setNewPostBody} body={activePost ? activePost.body : 'edit body'}/>
          </div>
          <input type="file" name='images' accept=".png,.jpg,.webp,.svg,.jpeg" className='file-upload-input'
             onChange={(e)=>{
              const image = e.target.files[0].name.toString()
              setNewPostImage(image)
            }}
            required
          />
          <div className="category-btn-container"> 
          {
            category.map(categ =>(
              <button key={categ.id} onClick={()=>{
                setNewPostCategory(categ.title)
                setCategory(category.map(cat =>(cat.title === categ.title ? {...cat, active:true} : {...cat,active:false})))
              }} className={`category-btn ${categ.active ? 'active' : ''}`}>{categ.title}</button>
            ))
          }
          </div>
          <input type="submit" value="publish" className='create-btn'/>
        </form>
        </div>
        <div className="overview ProseMirror">
        </div>
      </section>
      }
      {
        propertyEditForm && 
        <section className='post-view-section'>
        <div className="form-view">
        <span className='sortlist-close-btn' onClick={()=>{
            setPropertyEditForm(false)
        }}>
            <FaWindowClose />
        </span>
        <form className="create-post-form" onSubmit={editProperty}>
        <div contentEditable='true' ref={newPropertyLocation} className='edit-input'>{activeProperty ? activeProperty.location : 'edit title'}</div>
          <div className="tiptap-container">
            <TipTap setPostBody={setNewPropertyDescription} body={activeProperty ? activeProperty.description : 'edit description'}/>
          </div>
          <div contentEditable='true' ref={newPropertyPrice}  className='edit-input'>{activeProperty ? activeProperty.price : 'edit price'}</div>
          <input type="file" name='images' accept=".png,.jpg,.webp,.svg,.jpeg" className='file-upload-input'
             onChange={(e)=>{
              const image = e.target.files[0].name.toString()
              setNewPropertyFrontViewImage(image)
            }}
            required
          />
          <input type="file" name='images' accept=".png,.jpg,.webp,.svg,.jpeg" className='file-upload-input'
             onChange={(e)=>{
              const image = e.target.files[0].name.toString()
              setNewPropertyBackViewImage(image)
            }}
            required
          />
          <input type="file" name='images' accept=".png,.jpg,.webp,.svg,.jpeg" className='file-upload-input'
             onChange={(e)=>{
              const image = e.target.files[0].name.toString()
              setNewPropertySideViewImage(image)
            }}
            required
          />
          <div className="category-btn-container"> 
          {
            category.map(categ =>(
              <p key={categ.id} onClick={()=>{
                setNewPostCategory(categ.title)
                setCategory(category.map(cat =>(cat.title === categ.title ? {...cat, active:true} : {...cat,active:false}))) 
              }} className={`category-btn ${categ.active ? 'active' : ''}`}>{categ.title}</p>
            ))
          }
          </div>
          <input type="submit" value="publish" className='create-btn'/>
        </form>
        </div>
        <div className="overview ProseMirror">
        </div>
      </section>
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
        {showCreateSection && <section className='post-view-section'>
          <div className="form-view">
          <form className="create-post-form" onSubmit={(e)=>{
            e.preventDefault()
            createPost()
            uploadFile()
            }}>
            <input type="text" required placeHolder='post title'className='input' 
            onChange={(e)=>{
              const title = e.target.value.toString()
              setPostTitle(title)
            }}
            />
            <div className="tiptap-container">
              <TipTap setPostBody={setPostBody} body={''}/>
            </div>
            <input type="text" placeHolder='post author' className='input'
              onChange={(e)=>{
                const author = e.target.value.toString()
                setPostAuthor(author)
              }} required
            />
            <input type="file" name='theFiles' accept=".png,.jpg,.webp,.svg,.jpeg" className='file-upload-input'
               onChange={(e)=>{
                setPostImage(e.target.files[0].name.toString())
                const image = e.target.files[0]
                setUploadImage(image)
              }}
              required
            />
            <span className='create-category'>choose category</span>
            <div className="category-btn-container"> 
            {
              category.map(categ =>(
                <p key={categ.id} onClick={()=>{
                  setPostCategory(categ.title)
                  setCategory(category.map(button =>(button.id === categ.id ? {...button,active:true} : {...button,active:false})))

                }} className={`category-btn ${categ.active ? 'active' : ''}`}>{categ.title}</p>
              ))
            }
            </div>
            <input type="submit" value="create post" className='create-btn'/>
          </form>
          </div>
          <div className="overview ProseMirror">
            {postTitle && <h1>{postTitle}</h1>}
            { postImage && <Image height={300} width={400} alt='post image preview' src={`/${postImage}`} blurDataURL={`/${postImage}`} placeholder='blur'/> }
            {postBody && <div className="post-body">
              {parser(postBody)}
            </div>}
          </div>
        </section>}
        {showCreatePropertySection && 
          <section className='post-view-section'>
          <div className="form-view">
          <form className="create-post-form create-property" onSubmit={(e)=>{
            e.preventDefault()
            createProperty()
            uploadPropertyImages()
          }}>
            <input type="text" placeHolder='property price'className='input' onChange={(e)=>{
              const price  = e.target.value.toString()
              setPropertyPrice(price)
            }}/>
            <input type="text" placeHolder='property location' className='edit-input' onChange={(e)=>{
              const location  = e.target.value.toString()
              setPropertyLocation(location)
            }} />
            <textarea type="text" placeHolder='property description' className='create-post-textarea' onChange={(e)=>{
              const description  = e.target.value.toString()
              setPropertyDescription(description)
            }}/>
            <label htmlFor="file-upload-input" className='label'>full view picture</label>
            <input type="file" name='theFiles' accept=".png,.jpg,.webp,.svg,.jpeg" id="file-upload-input" className='file-upload-input' onChange={(e)=>{
              const frontImage  = e.target.files[0].name.toString()
              propertyImages.push(e.target.files[0])
              setFrontViewImage(frontImage)
            }}/>
            <label htmlFor="file-upload-input" className='label'>side view picture</label>
            <input type="file" name='theFiles' accept=".png,.jpg,.webp,.svg,.jpeg" id="file-upload-input" className='file-upload-input' onChange={(e)=>{
              const sideImage  = e.target.files[0].name.toString()
              propertyImages.push(e.target.files[0])
              setSideViewImage(sideImage)}}/>
            <label htmlFor="file-upload-input" className='label'>side view picture</label>
            <input type="file" name='theFiles' accept=".png,.jpg,.webp,.svg,.jpeg" id="file-upload-input" className='file-upload-input'onChange={(e)=>{
              const backImage  = e.target.files[0].name.toString()
              propertyImages.push(e.target.files[0])
              setBackViewImage(backImage)}} />
            <span className='create-category'>choose property type</span>
            <div className="category-btn-container"> 
            {
              propertyTypes.map(categ =>(
                <p key={categ.id} onClick={()=>{
                  setPropertyType(categ.title)
                  setPropertyTypes(propertyTypes.map(button =>(button.id === categ.id ? {...button,active:true} : {...button,active:false})))
                }} className={`category-btn ${categ.active ? 'active' : ''}`}>{categ.title}</p>
              ))
            }
            </div>
            <input type="submit" value="create property" className='create-btn'/>
          </form>
          </div>
          <div className="overview ProseMirror">
            {propertyDescription && <p>{propertyDescription}</p>}
            {propertyLocation && <p>{propertyLocation}</p>}
            {propertyPrice && <p>{propertyPrice}</p>}
            { frontViewImage && <Image height={300} width={400} alt='post image preview' src={`/${frontViewImage}`} blurDataURL={`/${frontViewImage}`} placeholder='blur'/> }
            { sideViewImage && <Image height={300} width={400} alt='post image preview' src={`/${sideViewImage}`} blurDataURL={`/${sideViewImage}`} placeholder='blur'/> }
            { backViewImage && <Image height={300} width={400} alt='post image preview' src={`/${backViewImage}`} blurDataURL={`/${backViewImage}`} placeholder='blur'/> }
          </div>
          </section>
          }
        {showEditSection && 
          <section className='overview-page dashboard-property-list'>
            {
              posts ?
              posts.map(post =>(
                <div className='edit-card' key={post._id}>
                  <div className="edit-icon-containers">
                    <RiFileEditLine className='edit-icon edit' onClick={()=>{
                      setActivePost({
                        title:post.title,
                        body:post.body,
                        image:post.image,
                        author:post.author,
                        category:post.category
                      })
                      setPostEditForm(true)
                      setActivePostId(post._id)
                    }}/>
                    <RiDeleteBin2Line className='edit-icon' onClick={()=>{deletePost(post._id)}}/>
                  </div>
                  <BlogCard item={post} />
                </div>
                )) : <p> fetching posts... </p>
            }
          </section>
          }
        {showEditPropertySection && 
          <section className='overview-page dashboard-property-list'>
            {
              properties ?
              properties.map(property => (
                <div className='edit-card' key={property._id}>
                  <div className="edit-icon-containers">
                    <RiFileEditLine className='edit-icon edit' onClick={()=>{
                      setPropertyEditForm(true)
                      setActivePropertyId(property._id)
                      setActiveProperty({
                        price: property.price,
                        description: property.description,
                        location :property.location,
                        frontViewImage:property.frontViewImage, 
                        sideViewImage: property.sideViewImage,
                        backViewImage: property.backViewImage
                      })
                    }}/>
                    <RiDeleteBin2Line className='edit-icon' onClick={()=>{
                      deleteProperty(property._id)
                    }}/>
                  </div>
                  <Card item={property} /> 
                </div>
              )) : <p>fetching properties...</p>
            }
          </section>
          } 
    </main>
  )
}

export default Overview