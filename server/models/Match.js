const mongoose = require('mongoose');

const mmatchSchema = new mongoose.Schema({
    team1: {
        type: String,
        required: true
    },
    team2: {
        type: String,
        required: true,
    },
    result: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('Match', mmatchSchema);