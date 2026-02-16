import { useState } from "react";
import { MatchCard } from "./MatchCard";
import { updateMatchApi } from "../../api/matchApi";

export const Fixtures = ({ matches, setMatches }) => {
  const [matchInputs, setMatchInputs] = useState({});
  const handleInputChange = (matchId, field, value) => {
    setMatchInputs((prev) => ({
      ...prev,
      [matchId]: {
        ...prev[matchId],
        [field]: value,
      },
    }));
  };

const handleResult = async (index, winnerName) => {
  const matchId = matches[index]._id;
  const inputs = matchInputs[matchId] || {};

  const updatedMatch = await updateMatchApi(matchId, {
    result: winnerName,
    team1Runs: inputs.team1Runs || 0,
    team2Runs: inputs.team2Runs || 0,
    team1Overs: inputs.team1Overs || "0.0",
    team2Overs: inputs.team2Overs || "0.0",
  });

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
            <MatchCard
              key={match._id}
              match={match}
              index={index}
              handleResult={handleResult}
              handleInputChange={handleInputChange}
              matchInputs={matchInputs}
            />
          );
        })}
      </ul>
    </div>
  );
};
