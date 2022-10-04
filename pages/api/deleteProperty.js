import { connectMongo } from "../../utils/connectMongo"
import Property from "../../models/propertyModel"
export default async function  createProperty(req, res){
    console.log("connecting to mongodb")
    await connectMongo() 
    console.log("connected successfully")
    try {
        await Property.deleteOne({"_id": req.body.id})
        console.log("property successfully deleted")
        res.status(200).json({status:200})
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}