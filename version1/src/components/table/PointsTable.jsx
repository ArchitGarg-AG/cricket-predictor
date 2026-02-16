export const PointsTable = ({ teams }) => {
  return (
    <div className="points-table card">
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
            <th>No Results</th>
            <th>NRR</th>

          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr
              key={team.name}
              className={index < 4 ? "top-four" : ""}
            >
              <td>{index + 1}</td>
              <td>{team.name}</td>
              <td>{team.points}</td>
              <td>{team.matchesPlayed}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.noResults}</td>
              <td>{team.nrr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
