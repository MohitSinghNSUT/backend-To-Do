
const userModel=require('./userSchema');
const toDoModel=require('./to_doSchema');
const database=require('./database');
 
const userLogin=async(req,res)=>{
    try {
        const present= await userModel.findOne(req.body)
        res.send(present)
    } catch (error) {
        
    }
    await database;
}
const signUp=async(req,res)=>{
    try {
        
        await database;
        const insertUser= await userModel.insertMany(req.body)
        res.send("signed");
    } catch (error) {
        
    }
}
const allDataget=async(req,res)=>{
    try {        
        await database;
        // console.log("get all data is ",req.body)
        const allData= await toDoModel.find(req.body)
        // console.log(allData);
        res.status(200).json(allData);
    } catch (error) {
        
    }
}
const allDataInsert=async(req,res)=>{
    try {
        await database;
        const allData= await toDoModel.insertMany(req.body)
        res.send(allData)
    } catch (error) {
        
    }
}
const deleteData=async(req,res)=>{
    try{
        await database
        const allData=await toDoModel.deleteOne(req.body);
        res.send('deleted');
    }
    catch(e){
        
    }
}
const updateData=async(req,res)=>{

    try {

        await database
        const { _id , title, work } = req.body;
        const update = { title, work };
        const filter={_id};
        const result = await toDoModel.updateOne(filter, { $set: update });
        res.send('deleted');
    } catch (error) {
        
    }
}

module.exports={
    signUp,
    userLogin,
    allDataget,
    allDataInsert,
    deleteData,
    updateData
}