export const PointsTable = ({ teams }) => {
  return (
    <div className="points-table">
      <h2>Points Table</h2>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Standing</th>
            <th>Team</th>
            <th>Points</th>
            <th>Matches Played</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>NRR</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr
              key={team.name}
              style={{
                backgroundColor: index < 4 ? "#3d9d28" : "",
                fontWeight: index < 4 ? "bold" : "normal",
              }}
            >
              <td>{index + 1}</td>
              <td>{team.name}</td>
              <td>{team.points}</td>
              <td>{team.matchesPlayed}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.nrr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
