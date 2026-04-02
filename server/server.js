import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import ConnectDB from './db/db.js'
import AuthRouter from './routes/auth.routes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/auth",AuthRouter);

ConnectDB()
.then(()=>{
   console.log(`Database Connection Successfull`); 

   app.listen(PORT,()=>{
     console.log(`Server Running at http://localhost:${PORT}`);
   })

})
