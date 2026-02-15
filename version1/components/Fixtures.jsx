import "./../src/index.css";

export const Fixtures = ({ matches, setMatches }) => {

  const handleResult =async (index, winnerName) => {

    const matchId = matches[index]._id;

    const res = await fetch(`http://localhost:5000/matches/${matchId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ result: winnerName }),
    });

    const updatedMatch = await res.json();

    const updatedMatches = matches.map((match, i) => 
      i === index ? updatedMatch : match
    );
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
