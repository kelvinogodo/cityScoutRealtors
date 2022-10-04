import { connectMongo } from "../../utils/connectMongo"
import Property from "../../models/propertyModel"
export default async function   createPost(req, res){
    console.log("connecting to mongodb")
    await connectMongo() 
    console.log("connected successfully")
    try {
        await Property.updateOne({"_id": req.body.id},
        {location : req.body.location,
        price: req.body.price,
        description: req.body.description},
        (error, data)=>{
            if(error){
                console.log(error)
            }
            else{
                console.log(data)
            }
        }
        )
        console.log("property successfully updated")
        res.status(200).json({status:200})
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}