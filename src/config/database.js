const mongoose =  require("mongoose")

const connectDb = async()=>{
await mongoose.connect('mongodb+srv://Sunny:2G9raxe8xCJh91TQ@namasteanode.iqyavlk.mongodb.net/devTinder')
 
}
module.exports = {connectDb}



