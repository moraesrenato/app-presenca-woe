const express = require('express');
const mongoose = require('mongoose');

const app = express();

const server = require('http').Server(app);

mongoose.connect(process.env.DATABASE,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

app.use(express.json());
app.use(require('./routes'));

var port = process.env.PORT || 3333;

//console.log(port)

server.listen(port);