import axios from "axios";
import { logger } from "../../services/logger.service.js";

const BASE_URL = "https://fantasy.premierleague.com/api/";

async function GeneralInfo() {
  try {
    const response = await axios.get(`${BASE_URL}bootstrap-static/`);
    return response.data;
  } catch (err) {
    logger.error("cannot find generalInfo", err);
    throw err;
  }
}
async function PlayerInfo(playerId) {
  try {
    const response = await axios.get(`${BASE_URL}element-summary/${playerId}`);
    return response.data;
  } catch (err) {
    logger.error("cannot find generalInfo", err);
    throw err;
  }
}

export const fplService = {
  GeneralInfo,
  PlayerInfo,
};
