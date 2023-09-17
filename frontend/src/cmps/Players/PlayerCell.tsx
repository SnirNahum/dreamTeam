import { getPosition, playerStatus } from "../../services/utilService";

const PlayerCell = ({ value, player }: any) => (
  <div className="player-cell">
    <img
      src={`https://yvrzozsmicwmxmhmjjty.supabase.in/storage/v1/object/public/public/kits/2023-24/shirt_${player.team_code}-220.png`}
      alt={`${player.team_short_name} Logo`}
    />
    <div className="player-details">
      <p className={`${playerStatus(player)} player-name`}>{value}</p>
      <div className="player-pos">
        <p>{getPosition(player?.element_type).short_position}</p>
        <p>{player.team_short_name}</p>
      </div>
    </div>
  </div>
);

export default PlayerCell;
