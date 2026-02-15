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
        const {result} = req.body
        const updatedMatch = await Match.findByIdAndUpdate(
            req.params.id,
            { result },
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
