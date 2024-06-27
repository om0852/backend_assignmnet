import UserModel from "../models/user.js";

const getUserById=(async (req, res) => {
    try {
        console.log(req.params)
      const user = await UserModel.findOne({id:req.params.id});
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  export default getUserById;