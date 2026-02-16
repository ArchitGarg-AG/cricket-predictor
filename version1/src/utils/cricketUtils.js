export const convertOvers = (overs) => {
  if (!overs) return 0;

  const parts = overs.split(".");
  const overPart = parseInt(parts[0]);
  const ballPart = Math.min(parseInt(parts[1] || "0"), 5);

  return overPart + ballPart / 6;
};

export const calculateStandings = (teams, matches) => {
  return teams.map((team) => {
    let wins = 0;
    let losses = 0;
    let matchesPlayed = 0;
    let points = 0;
    let noResults = 0;

    let totalRunsScored = 0;
    let totalOverFaced = 0;
    let totalRunsConceded = 0;
    let totalOversBowled = 0;

    matches.forEach((match) => {
      if (!match.result) return;

      const isTeam1 = match.team1 === team.name;
      const isTeam2 = match.team2 === team.name;

      if (!isTeam1 && !isTeam2) return;

      matchesPlayed++;

      const teamRuns = isTeam1 ? match.team1Runs : match.team2Runs;
      const teamOvers = isTeam1 ? match.team1Overs : match.team2Overs;
      const oppRuns = isTeam1 ? match.team2Runs : match.team1Runs;
      const oppOvers = isTeam1 ? match.team2Overs : match.team1Overs;

      if (teamRuns > 0 && oppRuns > 0) {
        totalRunsScored += teamRuns;
        totalOverFaced += convertOvers(teamOvers);

        totalRunsConceded += oppRuns;
        totalOversBowled += convertOvers(oppOvers);
      }

      if (match.result === team.name) {
        wins++;
        points += 2;
      } else if (match.result === "NR") {
        noResults++;
        points += 1;
      } else {
        losses++;
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
      noResults,
      totalRunsScored,
      totalOverFaced,
      totalRunsConceded,
      totalOversBowled,
      nrr: Number(nrr.toFixed(3)),
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
