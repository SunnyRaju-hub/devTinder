
const adminAuth = (req,res,next)=>{
    console.log("checking auth ")
 const token = "xyz"
    const isAuthorized = token === "xyz"
    if(!isAuthorized){
      res.status(401).send("unauthorized admin")
    }
    else{
       next()
    }
}

const userAuth = (req,res,next)=>{
    console.log("checking auth ")
 const token = "user"
    const isAuthorized = token === "user"
    if(!isAuthorized){
      res.status(401).send("unauthorized admin")
    }
    else{
       next()
    }
}
module.exports = {adminAuth,userAuth}