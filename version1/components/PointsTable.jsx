export const PointsTable = ({ teams }) => {
  return (
    <div className="points-table">
      <h2>Points Table</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.name}>
            {team.name} - Points: {team.points}, Matches Played: {team.matchesPlayed}, Wins: {team.wins}, Losses: {team.losses}
          </li>
        ))}
      </ul>
    </div>
  );
};
