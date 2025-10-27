const express =require('express');
const app =express();

app.get('/users:id',(req,res)=>{
    const userId=req.params.id;//acess route parameters
    res.send(`User ID is ${userId}`);
})
app.listen(3000,()=>{
    console.log('server is running at port 3000');
})