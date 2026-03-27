const express = require('express');
const router = express.Router();

const { seedLeauge } = require('../controllers/leaugeController');

router.post('/seed-league', seedLeauge);

module.exports = router;