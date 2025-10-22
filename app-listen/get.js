const express=require('express');
const app =express();

//app. get
app.get('/',(req,res)=>{
    res.send ("app.get is used to define get route")
})
app.listen(3000,()=>{console.log('server is running....')})
