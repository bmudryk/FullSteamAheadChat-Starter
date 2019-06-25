"use strict"

const port = process.env.PORT || 3000

var app = require('express')();
var server = require('http').Server(app);

//  Add step 3 right below this line



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

//  Add step 2 right below this line



//  Add step 4 right below this line


server.listen(port, () => {
    console.log('Server is running on port:  ', server.address().port);
});