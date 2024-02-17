import { playerPositions } from "../../services/utilService";
import FieldPosition from "./FieldPosition";

export default function Field({ dreamTeamPlayers }: any) {
<<<<<<< HEAD
=======
  {
  }
>>>>>>> 0e250b1f6ae95a4904dd60ca0cec5f5e35c9ec17
  return (
    <section className="field-container">
      {Object.keys(dreamTeamPlayers).map((playerPosition) => (
        <FieldPosition
          key={playerPosition}
          dreamTeamPlayers={dreamTeamPlayers[playerPosition]}
          playerPosition={playerPositions[playerPosition]}
        />
      ))}
    </section>
  );
}
