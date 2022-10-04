import { connectMongo } from "../../utils/connectMongo"
import Post from "../../models/postModel"
export default async function   createPost(req, res){
    console.log("connecting to mongodb")
    await connectMongo() 
    console.log("connected successfully")
    try {
        Post.create({
            title:req.body.title,
            body:req.body.body,
            date:req.body.date !== 'undefined' ? req.body.date : new Date.now(),
            author:req.body.author,
            image:req.body.image,
            category:req.body.category
        })
        console.log("post successfully created")
        res.json('created')
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}