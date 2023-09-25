import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function TeamsPage() {
  const { id } = useParams();
  const teams = useSelector((state) => state.fplModule.teams);
  const players = useSelector((state) => state.fplModule.players);
  //   const [currTeam, setCurrTeam] = useState();
  const [teamPlayers, setTeamPlayers] = useState([]);

  useEffect(() => {
    const parsedId = parseInt(id);

    // const foundTeam = teams.find((team) => team.id === parsedId);
    const foundPlayers = players.filter((player) => player.team === parsedId);

    // setCurrTeam(foundTeam);
    setTeamPlayers(foundPlayers);
  }, [id, teams, players]);

  function getPlayerData(key) {
    if (teamPlayers.length === 0) return null;

    const topPlayer = teamPlayers.reduce((prev, current) =>
      current[key] > prev[key] ? current : prev
    );

    return {
      name: topPlayer.web_name,
      value: topPlayer[key],
    };
  }

  return (
    <div className="TeamPage">
      {teamPlayers.length > 0 ? (
        <div className="team-leaderboard-card-container">
          {[
            { key: "goals_scored", label: "Top Scorer" },
            { key: "assists", label: "Maestro" },
            { key: "total_points", label: "Most Points" },
            { key: "points_per_game", label: "Points Per Game" },
            { key: "form", label: "Form" },
            { key: "selected_by_percent", label: "Most Attractive" },
            { key: "penalties_order", label: "Penalties Order" },
            {
              key: "corners_and_indirect_freekicks_order",
              label: "Corners and Indirect Free Kicks Order",
            },
            {
              key: "direct_freekicks_order",
              label: "Direct Free Kicks Order",
            },
          ].map((item) => (
            <div className="team-leaderboard-card" key={item.key}>
              <h1>{item.label}</h1>
              <h1>{getPlayerData(item.key)?.name}</h1>
              <h1>{`${getPlayerData(item.key)?.value} ${
                item.key === "assists"
                  ? "Most Assists"
                  : item.key === "total_points"
                  ? ""
                  : "goals"
              }`}</h1>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
