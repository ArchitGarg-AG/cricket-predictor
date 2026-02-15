const express = require("express");
const router = express.Router();

const {
    getMatches,
    updateMatch,
    resetMatches
} = require("../controllers/matchController");

router.get("/matches", getMatches);
router.put("/matches/:id", updateMatch);
router.put("/reset", resetMatches);

module.exports = router;