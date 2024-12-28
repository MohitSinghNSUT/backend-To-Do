require('dotenv').config();
const mongoose=require('mongoose');
const uri=process.env.DB_URI;
mongoose.connect(uri);
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected');
})
module.exports=db;
// 