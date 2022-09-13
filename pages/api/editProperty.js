import { connectMongo } from "../../utils/connectMongo"
import Property from "../../models/propertyModel"
export default async function   createPost(req, res){
    console.log("connecting to mongodb")
    await connectMongo() 
    console.log("connected successfully")
    try {
        await Property.updateOne({"_id": req.body.id},
        {$set : {location : req.body.location}},
        {$set : {price: req.body.price}},
        {$set : {description: req.body.description}},
        )
        res.acknowledged;
        console.log("property successfully updated")
        res.status(200).json('updated')
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}