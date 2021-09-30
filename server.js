   
const express = require('express');


const app = express();

const hour = new Date().getHours();
console.log(hour)
const day = new Date().getDay();
console.log(day)
   

const middlewrare=(req,res,next)=>{
    console.log('text from middleware')
    next()
}
app.use(middlewrare)
//the middleware

app.get('/',(req, res) => {
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        res.sendFile(__dirname +'/public/home.html');
      next();
    } else {
       
      res.sendFile(__dirname,+ 'public/close.html')
    
  
    }
  });
  app.use(express.static(__dirname, 'public'))
// {Listen}   declare the port and the callbackfunction


app.listen(3000,()=>{
console.log('the server is running')
})
;