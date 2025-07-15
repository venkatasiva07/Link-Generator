require('dotenv').config();
const mongoose = require('mongoose');

function connectDB(){
mongoose.connect("mongodb+srv://sivareddy:siva@reddy.vp9hkwq.mongodb.net/")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
  
}
module.exports = connectDB;

//r9myoawR0D7nPpi9
//venkatasivareddybhavanam