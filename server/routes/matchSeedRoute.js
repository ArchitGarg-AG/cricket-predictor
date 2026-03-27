const express = require('express');
const router = express.Router();
const { seedMatchesByLeague } = require('../controllers/matchSeedController');

router.post('/seed/:shortName', seedMatchesByLeague);

module.exports = router;
