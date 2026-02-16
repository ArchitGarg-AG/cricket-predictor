import { useState, useEffect } from "react";

import { Fixtures } from "./components/fixtures/Fixtures";
import { GameHeader } from "./components/layout/GameHeader";
import { PointsTable } from "./components/table/PointsTable";
import { Playoffs } from "./components/playoffs/Playoffs";
import { calculateStandings, sortStandings } from "./utils/cricketUtils";
import { fetchMatches, resetMatchesApi } from "./api/matchApi";
import { allTeams } from "./data/teams";
import "./index.css";


function App() {
  const [matchState, setMatchState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMatches()
      .then((data) => setMatchState(data))
      .catch(() => setError("Failed to load matches"))
      .finally(() => setLoading(false));
  }, []);

  const calculatedTeams = calculateStandings(allTeams, matchState);
  const sortedTeams = sortStandings(calculatedTeams);

  const allMatchesPlayed = matchState.length > 0 && matchState.every((match) => match.result !== null);
  const top4 = sortedTeams.slice(0, 4);
  const qualifier1 =
    allMatchesPlayed && top4.length === 4
      ? { team1: top4[0].name, team2: top4[1].name }
      : null;

  const eliminator =
    allMatchesPlayed && top4.length === 4
      ? { team1: top4[2].name, team2: top4[3].name }
      : null;

  const handleReset = async () => {
    await resetMatchesApi();

    const data = await fetchMatches();
    setMatchState(data);
  };

  return (
    <div className="container">
      <GameHeader />
      <button onClick={handleReset}>Reset Table</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <PointsTable teams={sortedTeams} />
      <Fixtures matches={matchState} setMatches={setMatchState} />
      <Playoffs qualifier1={qualifier1} eliminator={eliminator} />
    </div>
  );
}

export default App;
