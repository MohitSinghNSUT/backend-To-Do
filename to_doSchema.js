const mongoose=require("mongoose");
const to_do_Schema={
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    }
}
const CurrToDoSchema= new mongoose.Schema(to_do_Schema);
 const toDos=mongoose.model('toDos',CurrToDoSchema);
 module.exports=toDos
 