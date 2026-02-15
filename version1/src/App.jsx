import { useState, useEffect } from "react";
import { Fixtures } from "../components/Fixtures";
import { GameHeader } from "../components/GameHeader";
import { PointsTable } from "../components/PointsTable";

const allTeams = [
  {
    name: "India",
    points: 0,
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
  },
  {
    name: "Pakistan",
    points: 0,
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
  },
  {
    name: "USA",
    points: 0,
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
  },
  {
    name: "Namibia",
    points: 0,
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
  },
  {
    name: "Netherlands",
    points: 0,
    matchesPlayed: 0,
    wins: 0,
    losses: 0,
  },
];

function App() {
  const [matchState, setMatchState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/matches")
      .then(res => res.json())
      .then(data => setMatchState(data))
      .catch(err => console.log(err));
  }, []);

  const calucaltedTeams = allTeams.map((team) => {
    let wins = 0;
    let losses = 0;
    let matchesPlayed = 0;
    let points = 0;

    matchState.forEach((match) => {
      if (match.result) {
        if (match.team1 === team.name || match.team2 === team.name) {
          matchesPlayed += 1;
          if (match.result === team.name) {
            wins += 1;
            points += 2;
          } else {
            losses += 1;
          }
        }
      }
    });
    return { ...team, wins, losses, matchesPlayed, points };
  });

  const sortedTeams = [...calucaltedTeams].sort((a, b) => b.points - a.points);
  const handleReset = async () => {
  await fetch("http://localhost:5000/reset", {
    method: "PUT",
  });

  const res = await fetch("http://localhost:5000/matches");
  const data = await res.json();

  setMatchState(data);
};

  return (
    <>
      <GameHeader />
      <button onClick={handleReset}>Reset Table</button>
      <PointsTable teams={sortedTeams} />
      <Fixtures matches={matchState} setMatches={setMatchState} />
    </>
  );
}

export default App;
