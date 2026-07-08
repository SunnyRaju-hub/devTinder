const express = require("express")
const app = express()
const {adminAuth,userAuth} = require("./middlewares/auth")
app.use("/admin",adminAuth)

app.get("/user",userAuth,(req,res)=>{
   res.send("Get the all user")
})
app.post("/user/login",(req,res)=>{
    res.send("Succesfully login")
})
app.get("/admin/getAllData",userAuth,(req,res,next)=>{
   res.send("All data sent")
})

app.get("/admin/deleteUser",(req,res)=>{
    res.send("Deleted successfully")
})




app.listen(3000,()=>{
    console.log("server is succesfully listening on the port number is 3000")
})