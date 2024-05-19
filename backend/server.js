import express from 'express'
import cors from "cors"
import { connect } from 'mongoose'
import { connectdb } from './config/db.js'
import foodRouter from './routes/FoodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'




//app config
const app = express()
const port= 4000


//middleware
app.use(express.json())
app.use(cors())

//db connection
connectdb();


//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server Started On http://localhost:${port}`);
})

