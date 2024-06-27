import UserModel from "../models/user.js";

const deleteUser=(async(req,res)=>{
    try{
        //this api will  delete userdata based on id 
        const deleteData= await UserModel.deleteOne({id:req.params.id});
        res.status(204).json({});

    }catch(error){
        res.status(500).json({ error: err.message });  
    }
});
export default deleteUser;