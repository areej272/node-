const express =require('express');
const app=express();

//route for searching cars 
app.get('/cars',(req,res)=>{
    //get query string values
    const brand =req.query.brand;
    const color=req.query.color;

    //send response usimg query values
    if(brand && color){
        res.send(`you searchedfor ${color} ${brand} cars.`);

    }else if (brand){
        res.send(`you searched for ${brand} cars.`)

    }else{
        res.send(`please provide brand or color to search`)
    }
});

app.listen(3000,()=>{
    console.log('server is running at port 3000');
})
