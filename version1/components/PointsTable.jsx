export const PointsTable = ({ teams }) => {
  return (
    <div className="points-table">
      <h2>Points Table</h2>
      <ul>
        {teams.map((team, index) => (
          <li key={team.name}>
            {index + 1}. {team.name} - Points: {team.points}, Matches Played: {team.matchesPlayed}, Wins: {team.wins}, Losses: {team.losses}
          </li>
        ))}
      </ul>
    </div>
  );
};
