import UserModel from "../models/user.js";

const updateUser=(async(req,res)=>{
    try{
        const {last_name,first_name,age}=req.body
        //this api will  update only first name ,last name and age of userdata based on id 
const updateData= await UserModel.updateOne({id:req.params.id},{first_name,last_name,age})
        res.status(200).json({});

    }catch(error){
        res.status(500).json({ error: err.message });  
    }
});
export default updateUser;