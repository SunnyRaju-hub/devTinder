const express = require("express")
const {connectDb} = require('./config/database')
const app = express()
const User  = require('./models/user')

app.post("/signup",async(req,res)=>{
    const user = new User({
        firstName:"Mallepogu",
        lastName:"Raju",
        emailId:"sunny@gmail.com",
        password:"sunny@123"
    })
await user.save()
res.send("User added successfully")
})










connectDb()
.then(()=>{
   console.log("Database is connected successfully") 
   
app.listen(3000,()=>{
    console.log("server is succesfully listening on the port number is 3000")
})

}).catch((err)=>{
   console.error("Database is not connected successfully")
})



