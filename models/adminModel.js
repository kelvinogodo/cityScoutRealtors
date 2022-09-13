import { Schema, models, model } from "mongoose";

const admin = new Schema({
    password: {type:String, required:true},
    email:{type:String,required:true},
    name:{type:String, required:true}
})

const Admin = models.Admin || model('Admin', admin)
export default Admin;