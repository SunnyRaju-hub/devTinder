const express = require("express")
const {connectDb} = require('./config/database')
const app = express()
const User  = require('./models/user')
const user = require("./models/user")

app.use(express.json())

app.post("/signup",async(req,res)=>{
    const user = new User(req.body)
  try{
    await user.save()
    res.send("User added successfully")
  }
  catch(err){
    res.status(400).send("Error ",err)
  }
})

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId
    try {
        const users = await User.findOne({emailId:userEmail});
        if(users.length === 0){
          res.status(400).send("User is not found")
        }
        else{
          res.send(users)
        }

    } catch (err) {
        res.status(500).send("Something went wrong");
    }
});

app.get("/feed", async (req, res) => {
  // const userEmail = req.body.emailId
    try {
        const users = await User.find({});
        if(users.length === 0){
          res.status(400).send("User is not found")
        }
        else{
          res.send(users)
        }

    } catch (err) {
        res.status(500).send("Something went wrong");
    }
});








connectDb()
.then(()=>{
   console.log("Database is connected successfully") 
   
app.listen(3000,()=>{
    console.log("server is succesfully listening on the port number is 3000")
})

}).catch((err)=>{
   console.error("Database is not connected successfully")
})



