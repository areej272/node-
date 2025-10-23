const express =require('express');
const app =express();
const PORT=3000;

app.use(express.json()) //build in middleware

//get method  -retrive data
app.get('/home',(req,res)=>{
    res.send('this is a home page')
});
//post method - send data to server
app.post('/submit',(req,res)=>{
    const data =req.body;
    res.send({
        message:'this is a sumbit  successfully',
        yourData:data,
    })

});
//PUT method - update data
app.put('/edit',(req,res)=>{
 const updateData=req.body;
 res.send({
    meassage :"Data updated successfully!",
    data:updateData,
 })

 
})
//delete method -remove data
 app.delete('/delete',(req,res)=>{
    res.send('Data deleted successfully')
 });

app.listen(PORT,()=>{
    console.log('server running on port :$PORT');
})

