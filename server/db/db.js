import mongoose from "mongoose";


async function ConnectDB(req,res) {
    try{

        await mongoose.connect(process.env.MONGO_URL);

    }catch(err){
        console.log(`Error from Database Connection : ${err}`);
        res.status(500).json({
            success:false,
            message:`Inter Server Error`
        })
    }
}

export default ConnectDB;