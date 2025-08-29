const express=require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors=require("cors");

const authRoutes=require("./routes/auth");
//const dashboardRoutes=require("./routes/dashboard");


const app =express();
app.use(express.json());
app.use(cors());

app.use("/auth",authRoutes);
//app.use("/dashboard",dashboardRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/jwtdemo")
.then(()=>{
    console.log("DB connected");
    
});
app.listen(3000,()=>console.log("server running on ")
)