const express = require("express")
const app = express()



app.use("/hello",(req,res)=>{
    res.send("Hello From the dashoabord ")
})


app.use("/test",(req,res)=>{
    res.send("Hello from the server ")
})

app.listen(3000,()=>{
    console.log("server is succesfully listening on the port number is 3000")
})