import express from "express"; 
import getUserData from "../controller/getUserData.js";
import addUser from "../controller/addUser.js";
import getUserById from "../controller/getUserById.js";
import updateUser from "../controller/updateUser.js";
import deleteUser from "../controller/deleteUser.js";
const router = express.Router();

//search user by query
router.get("/api/users",getUserData)

//search user by id
router.get("/api/users/:id",getUserById)

//add new userdata
router.post("/api/users",addUser);


//update userdata based on id
router.put("/api/users/:id",updateUser);


//delete userdata based on id
router.delete("/api/users/:id",deleteUser);
export default router;