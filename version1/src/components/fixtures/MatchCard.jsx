export const MatchCard = ({
  match,
  index,
  handleResult,
  handleInputChange,
  matchInputs,
}) => {
  return (
    <li key={match._id} className="card">
      <div className="match-title">
        {match.team1} vs {match.team2}
      </div>

      <div className="match-buttons">
        <button
          className={
            match.result === match.team1 ? "win-btn active" : "win-btn"
          }
          onClick={() => handleResult(index, match.team1)}
        >
          {match.team1}
        </button>

        <button
          className={
            match.result === match.team2 ? "win-btn active" : "win-btn"
          }
          onClick={() => handleResult(index, match.team2)}
        >
          {match.team2}
        </button>

        <button
          className={match.result === "NR" ? "win-btn active" : "win-btn"}
          onClick={() => handleResult(index, "NR")}
        >
          No Result
        </button>

        {match.result && (
          <button
            className="clear-btn"
            onClick={() => handleResult(index, null)}
          >
            Clear
          </button>
        )}
      </div>

      {match.result && match.result !== "NR" && (
        <div className="score-row">
          <div className="team-score">
            <input
              type="number"
              min="0"
              placeholder="Runs"
              value={matchInputs[match._id]?.team1Runs || ""}
              onChange={(e) =>
                handleInputChange(match._id, "team1Runs", e.target.value)
              }
            />
            <input
              type="number"
              min="5"
              max="20"
              step="0.1"
              placeholder="Overs"
              value={matchInputs[match._id]?.team1Overs || ""}
              onChange={(e) =>
                handleInputChange(match._id, "team1Overs", e.target.value)
              }
            />
          </div>

          <div className="team-score">
            <input
              type="number"
              min="0"
              placeholder="Runs"
              value={matchInputs[match._id]?.team2Runs || ""}
              onChange={(e) =>
                handleInputChange(match._id, "team2Runs", e.target.value)
              }
            />
            <input
              type="number"
              min="5"
              max="20"
              step="0.1"
              placeholder="Overs"
              value={matchInputs[match._id]?.team2Overs || ""}
              onChange={(e) =>
                handleInputChange(match._id, "team2Overs", e.target.value)
              }
            />
          </div>
        </div>
      )}
    </li>
  );
};
