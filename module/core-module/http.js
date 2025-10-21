let http =require('http');//importing http

http.createServer(function(req,res){
    res.write('hello from server');//write a response to the client
    res.end()//end of response from the server
   
}). listen(3000);