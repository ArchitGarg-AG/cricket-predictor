const Match = require("../models/Match");

exports.getMatches = async (req, res) => {
  try {
    const matches = await Match.find();
    res.json(matches);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateMatch = async (req, res) => {
    try {
        const {team1Runs, team2Runs, team1Overs, team2Overs, result} = req.body
        const updatedMatch = await Match.findByIdAndUpdate(
            req.params.id,
            { team1Runs, team2Runs, team1Overs, team2Overs, result },
            { new: true }
        );
        res.json(updatedMatch);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.resetMatches = async (req, res) => {
  try {
    await Match.updateMany({}, { result: null });
    res.send("matches reset");
  } catch (err) {
    res.status(500).send(err);
  } 
};
