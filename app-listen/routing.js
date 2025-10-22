const express =require('express');
const app=express();
const Port =5000;

//defining routes

app.get('/',(req,res)=>{
    res.send("hello from home page");

})
app.get('/about',(req,res)=>{
    res.send("hello from  about page");
    
})
app.get('/contact',(req,res)=>{
    res.send("hello from constact  page");
    

})

app.listen(Port,()=>{
    console.log(`server running on port: ${Port}`);
})