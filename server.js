const express = require('express')
const app = express()
const path = require('path')
const date = new Date();
const day = date.getDay()
const hour = date.getHours()


//the middleware
app.use((req, res, next) => {
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 23) {
        next();
    } else {

        res.sendFile(path.join(__dirname, 'public', 'close.html'))

    }
});

app.use(express.static(path.join(__dirname, 'public')))


// {Listen}   declare the port and the callbackfunction
app.listen(6000, err => {
    if (err) console.log('sorry we are closed now ');
    else console.log('welcome to our office');
});
