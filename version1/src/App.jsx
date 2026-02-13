import { useState } from "react"
import { Fixtures } from "../components/Fixtures"
import { GameHeader } from "../components/GameHeader"
import { PointsTable } from "../components/PointsTable"

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
]

const matches = [
  {
    team1: "Netherlands",
    team2: "Pakistan",
    
  },
  {
    team1: "USA",
    team2: "India",
  },
  {
    team1: "Netherlands",
    team2: "Namibia",
  },
  {
    team1: "Pakistan",
    team2: "USA",
  },
  {
    team1: "Namibia",
    team2: "India",
  },
  {
    team1: "USA",
    team2: "Netherlands",
  },
  {
    team1: "USA",
    team2: "Namibia",
  },
  {
    team1: "India",
    team2: "Pakistan",
  },
  {
    team1: "Pakistan",
    team2: "Namibia",
  },
    {
    team1: "India",
    team2: "Netherlands",
  },
] 

function App() {
  const [teams, setTeams] = useState(allTeams)
  return (
    <>
      <GameHeader />
      <PointsTable teams={teams} />
      <Fixtures matches={matches} teams={teams} setTeams={setTeams} />
    </>
  )
}

export default App
