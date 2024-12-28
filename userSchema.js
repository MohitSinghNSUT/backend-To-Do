const mongoose=require("mongoose");
const userSchema={
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}
const personSchema= new mongoose.Schema(userSchema);
 const person=mongoose.model('users',personSchema);
 module.exports=person