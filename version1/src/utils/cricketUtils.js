export const convertOvers = (overs) => {
  if (!overs) return 0;

  const parts = overs.split(".");
  const overPart = parseInt(parts[0]);
  const ballPart = parseInt(parts[1] || "0");

  return overPart + ballPart / 6;
};

export const calculateStandings = (teams, matches) => {
  return teams.map((team) => {
    let wins = 0;
    let losses = 0;
    let matchesPlayed = 0;
    let points = 0;

    let totalRunsScored = 0;
    let totalOverFaced = 0;
    let totalRunsConceded = 0;
    let totalOversBowled = 0;

    matches.forEach((match) => {
      if (!match.result) return;

      if (match.team1 === team.name) {
        matchesPlayed++;

        totalRunsScored += match.team1Runs || 0;
        totalOverFaced += convertOvers(match.team1Overs);

        totalRunsConceded += match.team2Runs || 0;
        totalOversBowled += convertOvers(match.team2Overs);

        if (match.result === team.name) {
          wins++;
          points += 2;
        } else {
          losses++;
        }
      }
      if (match.team2 === team.name) {
        matchesPlayed++;

        totalRunsScored += match.team2Runs || 0;
        totalOverFaced += convertOvers(match.team2Overs);

        totalRunsConceded += match.team1Runs || 0;
        totalOversBowled += convertOvers(match.team1Overs);

        if (match.result === team.name) {
          wins++;
          points += 2;
        } else {
          losses++;
        }
      }
    });

    let nrr = 0;
    if (totalOverFaced > 0 && totalOversBowled > 0) {
      nrr =
        totalRunsScored / totalOverFaced - totalRunsConceded / totalOversBowled;
    }
    return {
      ...team,
      wins,
      losses,
      matchesPlayed,
      points,
      totalRunsScored,
      totalOverFaced,
      totalRunsConceded,
      totalOversBowled,
      nrr: nrr.toFixed(3),
    };
  });
};


export const sortStandings = (teams) => {
  return [...teams].sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    return b.nrr - a.nrr;
  });
};
