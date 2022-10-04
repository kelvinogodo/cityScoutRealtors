import { connectMongo } from "../../utils/connectMongo"
import Property from "../../models/propertyModel"
export default async function  createProperty(req, res){
    console.log("connecting to mongodb")
    await connectMongo() 
    console.log("connected successfully")
    try {
        Property.create({
            description:req.body.description,
            location:req.body.location,
            price:req.body.price,
            frontViewImage:req.body.frontViewImage,
            sideViewImage:req.body.sideViewImage,
            backViewImage:req.body.backViewImage,
            type:req.body.type,
        })
        res.json({status:200})
    } catch (error) {
        console.log(error)
        res.json(error)
        res.status(500)
    }
}