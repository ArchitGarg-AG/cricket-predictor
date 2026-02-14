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
            <li key={index}>
              {match.team1} vs {match.team2}
              <button onClick={() => handleResult(index, match.team1)}>
                {match.team1} Wins
              </button>
              <button onClick={() => handleResult(index, match.team2)}>
                {match.team2} Wins
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
