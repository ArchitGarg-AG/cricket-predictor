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
    team1Runs: {
        type: Number,
        default: 0
    },
    team2Runs: {
        type: Number,
        default: 0
    },
    team1Overs: {
        type: String,
        default: "0.0"
    },
    team2Overs: {
        type: String,
        default: "0.0"
    },
    result: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('Match', mmatchSchema);