   
const express = require('express');
const { Next } = require('react-bootstrap/esm/PageItem');

const app = express();

const hour = new Date().getHours();
console.log(hour)
const day = new Date().getDay();
console.log(day)

//the middleware
app.use((req, res, next) => {
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next();
    } else {
       
          res.sendFile(path.join(__dirname, 'public', 'closed.html'))
  
    }
  });

// {Listen}   declare the port and the callbackfunction

app.listen(3000,()=>{
console.log('the server is running')
}