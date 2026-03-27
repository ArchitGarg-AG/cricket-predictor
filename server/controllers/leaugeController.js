const League = require('../models/League');

exports.seedLeauge = async (req, res) => {
    try {
        await League.deleteMany();

    const leagues = [
      { name: "Indian Premier League", shortName: "IPL", format: "T20", season: "2026" },
      { name: "Big Bash League", shortName: "BBL", format: "T20", season: "2025-26" },
      { name: "SA20", shortName: "SA20", format: "T20", season: "2026" },
      { name: "Caribbean Premier League", shortName: "CPL", format: "T20", season: "2026" },
      { name: "ICC Cricket World Cup", shortName: "WC", format: "ODI", season: "2027" },
      { name: "ICC World Test Championship", shortName: "WTC", format: "TEST", season: "2025-27" }
    ];

    await League.insertMany(leagues);

    res.json({ message: "Leagues seeded successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};