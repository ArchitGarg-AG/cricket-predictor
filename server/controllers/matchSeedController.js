const Match = require('../models/Match');
const League = require('../models/League');

exports.seedMatchesByLeague = async (req, res) => {
    try {
        const {shortName} = req.params;

        const league = await League.findOne({shortName});
        if (!league) {
            return res.status(404).json({error: 'League not found'});
        }
        await Match.deleteMany({leagueId: league._id});

        let teams = [];
        if (shortName === 'IPL') {
            teams = ['Mumbai Indians', 'Chennai Super Kings', 'Royal Challengers Bangalore', 'Kolkata Knight Riders', 'Sunrisers Hyderabad', 'Rajasthan Royals', 'Punjab Kings', 'Delhi Capitals', 'Lucknow Super Giants', 'Gujarat Titans'];
        }

        let matches = [];
        let matchNumber = 1;
        for (let i = 0; i < teams.length; i++) {
            for (let j = i + 1; j < teams.length; j++) {
                matches.push({
                    leagueId: league._id,
                    season: league.season,
                    matchNumber: matchNumber++,
                    teamA: teams[i],
                    teamB: teams[j],
                    venue: "TBD",
                    date: new Date(),
                    status: 'Upcoming'
                });
            }
        }
        await Match.insertMany(matches);
        res.json({message: `${shortName} Matches seeded successfully`});
    } catch (err) {
        res.status(500).json({error: err.message});
    }  
};