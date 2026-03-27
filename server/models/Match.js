const mongoose = require("mongoose");

const mmatchSchema = new mongoose.Schema({
  leagueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "League",
    required: true,
  },

  season: {
    type: String,
  },
  matchNumber: {
    type: Number,
  },

  teamA: {
    type: String,
  },
  teamB: {
    type: String,
  },
  venue: {
    type: String,
  },
  date: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["upcoming", "live", "completed"],
    default: "upcoming",
  },

  result: String,

  runsA: Number,
  runsB: Number,
  overA: Number,
  overB: Number,
});

module.exports = mongoose.model("Match", mmatchSchema);
