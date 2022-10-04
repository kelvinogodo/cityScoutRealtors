import { connectMongo } from "../../utils/connectMongo"
import Post from "../../models/postModel"
export default async function   createPost(req, res){
    console.log("connecting to mongodb")
    await connectMongo() 
    console.log("connected successfully")
    try {
        await Post.deleteOne({"_id": req.body.id})
        console.log("post successfully deleted")
        res.status(200).json({status:200})
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}