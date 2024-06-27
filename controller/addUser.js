import UserModel from "../models/user.js";

const addUser=('/', async (req, res) => {
    const user = new UserModel(req.body);
    try {
      await user.save();
      res.status(201).json({});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  export default addUser;