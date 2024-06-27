import express, { json } from "express";
const app = express();
import connectDB from "./db/db.js";
import router from "./routes/user.js";
app.use(json({limit: '50mb'}));
app.use(router);

//function to make connection with mongoDB
connectDB();
//this api is just to check server is working or not
// app.get("/", (req, res) => res.send("server is working"));


app.listen( 4000, () => console.log("Server is running"));
