import UserModel from "../models/user.js";


const getUserData=('/api/users', async (req, res) => {
    try {
      const { page = 1, limit = 5, search = '', sort = '' } = req.query;

      const query = {
        $or: [
          { first_name: new RegExp(search, 'i') },
          { last_name: new RegExp(search, 'i') }
        ]
      };

      let sortOption = {};
      if (sort) {
        const sortOrder = sort.startsWith('-') ? -1 : 1;
        const sortField = sort.startsWith('-') ? sort.substring(1) : sort;
        sortOption[sortField] = sortOrder;
      }
        
      const users = await UserModel.find(query)
        .sort(sortOption)
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
  
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  export default getUserData