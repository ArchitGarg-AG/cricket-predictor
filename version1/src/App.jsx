import { useState } from "react";
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

const matches = [
  {
    team1: "Netherlands",
    team2: "Pakistan",
    result: null,
  },
  {
    team1: "USA",
    team2: "India",
    result: null,
  },
  {
    team1: "Netherlands",
    team2: "Namibia",
    result: null,
  },
  {
    team1: "Pakistan",
    team2: "USA",
    result: null,
  },
  {
    team1: "Namibia",
    team2: "India",
    result: null,
  },
  {
    team1: "USA",
    team2: "Netherlands",
    result: null,
  },
  {
    team1: "USA",
    team2: "Namibia",
    result: null,
  },
  {
    team1: "India",
    team2: "Pakistan",
    result: null,
  },
  {
    team1: "Pakistan",
    team2: "Namibia",
    result: null,
  },
  {
    team1: "India",
    team2: "Netherlands",
    result: null,
  },
];

function App() {
  const [matchState, setMatchState] = useState(matches);

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

  return (
    <>
      <GameHeader />
      <button onClick={() => setMatchState(matches)}>Reset Table</button>
      <PointsTable teams={sortedTeams} />
      <Fixtures matches={matchState} setMatches={setMatchState} />
    </>
  );
}

export default App;
