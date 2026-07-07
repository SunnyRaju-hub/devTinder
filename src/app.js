const express = require("express")
const app = express()



app.use("/user",(req,res,next)=>{
    console.log("handling the route user !!")
    next()
    // res.send("Response !!")
},
(req,res,next)=>{
  console.log("handling the route user2 !!")
//   res.send(" 2nd Response !!")
next()
},
(req,res,next)=>{
  console.log("handling the route user3 !!")
//   res.send(" 3rd Response !!")
next()
},
(req,res,next)=>{
  console.log("handling the route user4 !!")
//   res.send(" 4th Response !!")
next()
},
(req,res,next)=>{
  console.log("handling the route user5 !!")
  res.send(" 5th Response !!")
},
)


app.listen(3000,()=>{
    console.log("server is succesfully listening on the port number is 3000")
})