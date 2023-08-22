import express from "express"
const app=express();
const PORT=8000;
import Connection from './database/db.js';
import dotenv from "dotenv"
import Routes from "./routes/router.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
app.use("/",Routes);




const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;


Connection(username,password);





app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}` )
})