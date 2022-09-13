import mongoose from "mongoose"
export const connectMongo = async ()=>{
   try {
    mongoose.connect(process.env.MONGO_URI)
    console.log('successfully connected to mongodb...')
   } catch (error) {
    console.log(`${error} connection failed`)
   }  
}
