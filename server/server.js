import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import ConnectDB from './db/db.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());


ConnectDB()
.then(()=>{
   console.log(`Database Connection Successfull`); 
   
   app.listen(PORT,()=>{
     console.log(`Server Running at http://localhost:${PORT}`);
   })

})
