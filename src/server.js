const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://doc:doc123@cluster0.g0atg.mongodb.net/powerranger?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

app.use(express.json());
app.use(require('./routes'));

var port = process.env.PORT || 3333;

console.log(port)

app.listen(port);