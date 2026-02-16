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
  const match = matches[index];
  const matchId = match._id;
  const inputs = matchInputs[matchId] || {};

  const team1Runs = Number(inputs.team1Runs);
  const team2Runs = Number(inputs.team2Runs);

  let finalResult = winnerName;

  if (!isNaN(team1Runs) && !isNaN(team2Runs)) {
    if (team1Runs > team2Runs) {
      finalResult = match.team1;
    } else if (team2Runs > team1Runs) {
      finalResult = match.team2;
    } else if (team1Runs === team2Runs) {
      finalResult = "NR";
    }
  }

  const updatedMatch = await updateMatchApi(matchId, {
    result: finalResult,
    team1Runs: inputs.team1Runs || 0,
    team2Runs: inputs.team2Runs || 0,
    team1Overs: inputs.team1Overs || "0.0",
    team2Overs: inputs.team2Overs || "0.0",
  });

  const updatedMatches = matches.map((m, i) =>
    i === index ? updatedMatch : m
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
