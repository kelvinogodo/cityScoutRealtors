import Admin from "../../models/adminModel"
import { connectMongo } from "../../utils/connectMongo"
export default async function  login(req, res){
    await connectMongo()
try {
    const password = req.body.password
    const admin = await Admin.findOne({ password: password })
    res.json({
      status: 200,
      name: admin.name,
    })
    
  } catch (error) {
    res.json({ status: 'error' })
  }
}