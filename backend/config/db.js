import mongoose from "mongoose";

export const connectdb = async()=>{
    await mongoose.connect('mondodburl/foodapp').then(()=>console.log("db connected"));
    //replace mondodburl with actual url
}