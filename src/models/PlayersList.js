const mongoose = require('mongoose');

const PlayersList = new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Players"
    }]
},

{ timestamps: true}

);

module.exports = mongoose.model('PlayersList', PlayersList);