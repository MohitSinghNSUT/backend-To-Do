const express=require("express");
const app=express();
const router=require('./router');
app.use(express.json());
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  };
 app.use(cors(corsOptions));
  
app.use('/user',router);
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(process.env.PORT,()=>{
    console.log("server runiing")
})