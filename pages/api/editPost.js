import { connectMongo } from "../../utils/connectMongo"
import Post from "../../models/postModel"
export default async function   createPost(req, res){
    console.log("connecting to mongodb")
    await connectMongo() 
    console.log("connected successfully")
    try {
        await Post.findOneAndUpdate({"_id": req.body.id},
         {title : req.body.title, body: req.body.body,image: req.body.image,category : req.body.category},
        (error, data)=>{
            if(error){
                console.log(error)
            }
            else{
                console.log(data)
            }
        }
        )
        res.status(200).json({status:200})
        console.log("post successfully updated")
    } catch (error) {
        console.log(error)
        res.json(error)
        res.status(500)
    }
}