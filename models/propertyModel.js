import { Schema, models, model } from "mongoose";

const propertySchema = new Schema({
    description: {type:String, required:true},
    location:{type:String, required:true},
    price:{type:String,required:true},
    frontViewImage:{type:String,required:true},
    sideViewImage:{type:String,required:true},
    backViewImage:{type:String,required:true},
    type:{type:String,required:true},
})

const Property = models.Property || model('Property', propertySchema)
export default Property;