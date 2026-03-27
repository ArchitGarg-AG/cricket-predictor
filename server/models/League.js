const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    shortName: {
        type: String,
        required: true
    },
    format: {
        type: String,
        enum: ['T20', 'ODI', 'Test'],
        required: true
    },
    season: {
        type: String,
        required: true 
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('League', leagueSchema);