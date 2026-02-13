export const Fixtures = ({ matches, teams, setTeams }) => {

  const handleWin = (winnerName, loserName) => {

    const updatedTeams = teams.map((team) => {

      if (team.name === winnerName) {
        return {
          ...team,
          points: team.points + 2,
          matchesPlayed: team.matchesPlayed + 1,
          wins: team.wins + 1,
        };
      }
      if (team.name === loserName) {
        return {
            ...team,
            matchesPlayed: team.matchesPlayed + 1,
            losses: team.losses + 1,
        };
      }
        return team;
    });
    setTeams(updatedTeams);
  };

  return (
    <div className="matches">
      <h2>Matches</h2>

      <ul>
        {matches.map((match, index) => {
          return (
            <li key={index}>
              {match.team1} vs {match.team2}
              <button onClick={() => handleWin(match.team1)}>
                {match.team1} Wins
              </button>
              <button onClick={() => handleWin(match.team2)}>
                {match.team2} Wins
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
