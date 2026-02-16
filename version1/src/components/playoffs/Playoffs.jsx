import { useState } from "react";

export const Playoffs = ({ qualifier1, eliminator }) => {
  const [q1Winner, setQ1Winner] = useState(null);
  const [eliminatorWinner, setEliminatorWinner] = useState(null);
  const [q2Winner, setQ2Winner] = useState(null);
  const [champion, setChampion] = useState(null);

  if (!qualifier1 || !eliminator) return null;

  const handleQ1Winner = (team) => {
    setQ1Winner(team);
    setQ2Winner(null);
    setChampion(null);
  };

  const handleEliminatorWinner = (team) => {
    setEliminatorWinner(team);
    setQ2Winner(null);
    setChampion(null);
  };

  const handleQ2Winner = (team) => {
    setQ2Winner(team);
    setChampion(null);
  };

  const handleResetPlayoffs = () => {
    setQ1Winner(null);
    setEliminatorWinner(null);
    setQ2Winner(null);
    setChampion(null);
  };

  const qualifier2 =
    q1Winner && eliminatorWinner
      ? {
          team1:
            q1Winner === qualifier1.team1
              ? qualifier1.team2
              : qualifier1.team1,
          team2: eliminatorWinner,
        }
      : null;

  const finalMatch =
    q1Winner && q2Winner
      ? {
          team1: q1Winner,
          team2: q2Winner,
        }
      : null;

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Playoffs</h2>

      <div className="match-card">
        <strong>Qualifier 1</strong>
        <div>{qualifier1.team1} vs {qualifier1.team2}</div>

        <button
          className={q1Winner === qualifier1.team1 ? "win-btn active" : "win-btn"}
          onClick={() => handleQ1Winner(qualifier1.team1)}
        >
          {qualifier1.team1}
        </button>

        <button
          className={q1Winner === qualifier1.team2 ? "win-btn active" : "win-btn"}
          onClick={() => handleQ1Winner(qualifier1.team2)}
        >
          {qualifier1.team2}
        </button>
      </div>

      <div className="match-card">
        <strong>Eliminator</strong>
        <div>{eliminator.team1} vs {eliminator.team2}</div>

        <button
          className={eliminatorWinner === eliminator.team1 ? "win-btn active" : "win-btn"}
          onClick={() => handleEliminatorWinner(eliminator.team1)}
        >
          {eliminator.team1}
        </button>

        <button
          className={eliminatorWinner === eliminator.team2 ? "win-btn active" : "win-btn"}
          onClick={() => handleEliminatorWinner(eliminator.team2)}
        >
          {eliminator.team2}
        </button>
      </div>

      {qualifier2 && (
        <div className="match-card">
          <strong>Qualifier 2</strong>
          <div>{qualifier2.team1} vs {qualifier2.team2}</div>

          <button
            className={q2Winner === qualifier2.team1 ? "win-btn active" : "win-btn"}
            onClick={() => handleQ2Winner(qualifier2.team1)}
          >
            {qualifier2.team1}
          </button>

          <button
            className={q2Winner === qualifier2.team2 ? "win-btn active" : "win-btn"}
            onClick={() => handleQ2Winner(qualifier2.team2)}
          >
            {qualifier2.team2}
          </button>
        </div>
      )}

      {finalMatch && (
        <div className="match-card">
          <strong>Final</strong>
          <div>{finalMatch.team1} vs {finalMatch.team2}</div>

          <button
            className={champion === finalMatch.team1 ? "win-btn active" : "win-btn"}
            onClick={() => setChampion(finalMatch.team1)}
          >
            {finalMatch.team1}
          </button>

          <button
            className={champion === finalMatch.team2 ? "win-btn active" : "win-btn"}
            onClick={() => setChampion(finalMatch.team2)}
          >
            {finalMatch.team2}
          </button>
        </div>
      )}

      {champion && (
        <h3 style={{ marginTop: "20px", color: "#0f7b0f" }}>
          🏆 Champion: {champion}
        </h3>
      )}

      <button
        style={{ marginTop: "15px" }}
        onClick={handleResetPlayoffs}
      >
        Reset Playoffs
      </button>
    </div>
  );
};
