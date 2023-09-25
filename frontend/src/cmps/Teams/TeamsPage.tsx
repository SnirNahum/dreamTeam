import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PointsLeaderBoards from "./PointsLeaderBoards";
import TeamTable from "./TeamTable";

export default function TeamsPage() {
  const { id } = useParams();
  const teams = useSelector((state) => state.fplModule.teams);
  const players = useSelector((state) => state.fplModule.players);
  const [teamPlayers, setTeamPlayers] = useState([]);

  useEffect(() => {
    const parsedId = parseInt(id);

    const foundPlayers = players.filter((player) => player.team === parsedId);
    setTeamPlayers(foundPlayers);
  }, [id, teams, players]);

  return (
    <div className="TeamPage">
      <PointsLeaderBoards teamPlayers={teamPlayers} />
      <TeamTable teamPlayers={teamPlayers} />
    </div>
  );
}
