const express=require('express');
const app=express();

app.get('/status',(req,res)=>{
    res.json({status: "Application is running, Made some change try /try path"});
});
app.get('/try',(req,res)=>{
    res.json({status: "Welcome gave a Try, That's great. Thank You"});
});
app.listen(3000,()=>{
    console.log('Server running on port 3000');
});