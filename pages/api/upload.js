import { connectMongo } from "../../utils/connectMongo"
import multer from "multer"
import path from "path"
export default async function   upload(req, res){
    console.log("connecting to mongodb")
    await connectMongo()
    console.log("connected successfully")
    // const file =req.files.file 
    const storage = multer.diskStorage({
        destination: '../../public/',
        filename: function (req, file , cb) {
            cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    })

    const upload = multer({
        storage:storage
    }).single('images')
    try {
        upload(req, res, (err) =>{
            if(err){
                res.json({status: 400})
            }
            else{
                res.json({status:'okay'})
                console.log('image successfully uploaded')
            }
        })
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}