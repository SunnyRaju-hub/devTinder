const express = require("express")
const app = express()



app.get("/user/:userId/:name",(req,res)=>{
    console.log(req.params)
    res.send({firstName:"Sunny",lastName:"Raju"})
})




app.listen(3000,()=>{
    console.log("server is succesfully listening on the port number is 3000")
})