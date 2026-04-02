import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    avatar:{
        type:String
    },
    credits:{
        type:Number,
        default:100,
        min:0
    },
    plan:{
        type:String,
        enum:["free","pro","enterprise"],
        default:"free"
    }

},{timestamps:true});

const User = mongoose.model("users",userSchema);

export default User;