const express = require('express')
const app = express()
const path = require('path')
const date = new Date();
const day = date.getDay()
const hour = date.getHours()


//the middleware

app.use((req, res, next) => {
    if ((hour>8) && (hour<01)&&(day<6) ) {
        res.sendFile(__dirname + '/public/home.html');
    
        next();
    } else {

        res.sendFile(__dirname+ '/public/close.html')
        next();
    }
});

app.use(express.static(__dirname, 'public'));


// {Listen}   declare the port and the callbackfunction

app.listen(3000,(error)=>{
    if (error) console.log('serveur is not running')
    else console.log ('sever is running on port 3000')
})
