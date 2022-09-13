import { connectMongo } from "../../utils/connectMongo"
import Post from "../../models/postModel"
export default async function   createPost(req, res){
    console.log("connecting to mongodb")
    await connectMongo() 
    console.log("connected successfully")
    try {
        await Post.updateOne({"_id": req.body.id},
        {$set : {title : req.body.title}},
        {$set : {body: req.body.body}},
        {$set : {image: req.body.image}},
        {$set : {author:req.body.author}},
        {$set : {category : req.body.category}},
        )
        res.acknowledged;
        console.log("post successfully updated")
        res.status(200).json('updated')
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}