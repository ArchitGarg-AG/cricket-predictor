import "./../src/index.css";

export const Fixtures = ({ matches, setMatches }) => {
  const handleResult = (index, winnerName) => {
    const updatedMatches = matches.map((match, i) => {
      if (i === index) {
        return { ...match, result: winnerName };
      }
      return match;
    });

    setMatches(updatedMatches);
  };

  return (
    <div className="matches">
      <h2>Matches</h2>

      <ul>
        {matches.map((match, index) => {
          return (
            <li key={index} className="match-row">

              <div className="match-name">
                {match.team1} vs {match.team2}
              </div>

              <div className="match-buttons">
                <button
                  style={{marginLeft: "10px",backgroundColor:match.result === match.team1 ? "#008700" : "",}}
                  onClick={() => handleResult(index, match.team1)}
                >{match.team1}
                </button>

                <button
                  style={{marginLeft: "10px",backgroundColor:match.result === match.team2 ? "#008700" : "",}}
                  onClick={() => handleResult(index, match.team2)}
                >{match.team2}
                </button>

                {match.result && (
                  <button
                    style={{ marginLeft: "8px", backgroundColor: "#444242" }}
                    onClick={() => handleResult(index, null)}
                  >Clear
                  </button>
                )}
              </div>
                <div className="match-status">{match.result ? `${match.result}` : ""}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
