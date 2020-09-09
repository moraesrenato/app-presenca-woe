const mongoose = require('mongoose');
const Players = require('./Players');

const PlayersList = new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    players: [Players]
},
    { timestamps: true });

module.exports = mongoose.model('PlayersList', PlayersList);