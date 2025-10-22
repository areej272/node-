const express =require('express'); //importing express
const app= express(); //creating a an express application 

//start the server 
app.listen(3000,()=>{
    console.log('server is running ...');
})