import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PlayersList from "../Players/PlayersList";
// import PointsLeaderBoards from "./PointsLeaderBoards";
// import TeamTable from "./TeamTable";

export default function TeamsPage() {
  const { teamId } = useParams();
  const teams = useSelector((state) => state.fplModule.teams);
  const players = useSelector((state) => state.fplModule.players);
  const [teamPlayers, setTeamPlayers] = useState([]);

  useEffect(() => {
    const currTeam = parseInt(teamId);

    const foundPlayers = players.filter((player) => player.team === currTeam);
    setTeamPlayers(foundPlayers);
    
    
    
  }, [teamId, teams, players]);
  return (
    <div className="TeamPage">
      <PlayersList teamPlayers={teamPlayers} />

      {/* <PointsLeaderBoards teamPlayers={teamPlayers} /> */}
      {/* <TeamTable teamPlayers={teamPlayers} /> */}
    </div>
  );
}
