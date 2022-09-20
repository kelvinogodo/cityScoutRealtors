import Post from '../../../models/postModel'
import {connectMongo} from '../../../utils/connectMongo'
export default async function handler({query:{id}}, res) {
    await connectMongo()
    const posts = await Post.find()
    const filteredPost = posts.filter(post =>(post.title.trim() == id ))

    if(filteredPost.length > 0){
        res.status(200).json(filteredPost[0])
    }
    else{
        res.status(404).json({message : `post with the id ${id} does not exist`})
    }
}