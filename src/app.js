const express = require("express")
const app = express()



app.get("/user",(req,res)=>{
    res.send({firstName:"Sunny",lastName:"Raju"})
})

app.post("/user",(req,res)=>{
    res.send("Data successfully saved to the database ")
})

app.delete("/user",(req,res)=>{
    res.send("Delted successfully")
})
app.use("/hello",(req,res)=>{
    res.send("Hello From the dashoabord ")
})


app.use("/hello/2",(req,res)=>{
    res.send("Hello From the Profile ")
})

app.use("/test",(req,res)=>{
    res.send("Hello from the server ")
})

// app.use("/",(req,res)=>{
//     res.send("Hello Sunny")
// })

app.listen(3000,()=>{
    console.log("server is succesfully listening on the port number is 3000")
})