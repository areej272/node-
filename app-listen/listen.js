const express =require("express")
const app =express();
const port =3000;

//starting server 
app.listen(port,()=>{
    console.log('server running on ${port}');
})