const mongoose = require('mongoose');

const Players = new mongoose.Schema({
    nick: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
},

{ timestamps: true}

);

module.exports = mongoose.model('Players', Players);