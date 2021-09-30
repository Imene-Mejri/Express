   
const express = require('express');


const app = express();

const hour = new Date().getHours();

const day = new Date().getDay();

   

app.use((req,res,next)=>{
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 18) 
    res.sendFile(__dirname +'/public/close.html');
    /* else res.sendFile(__dirname + '/public/home.html') */
    next()
})

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/public/home.html')
  }); 
    

  app.use(express.static(__dirname + 'public'))
// {Listen}   declare the port and the callbackfunction


app.listen(4000,(error)=>{
    error?console.log(error):
console.log('the server is running')
})
;