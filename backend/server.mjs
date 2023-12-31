import http from "http";
import path from "path";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const server = http.createServer(app);

// Express App Config
app.use(cookieParser());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve("public")));
  ("https://dreamteam-yidh.onrender.com/");
} else {
  const corsOptions = {
    origin: [
      "http://127.0.0.1:5173",
      "http://localhost:5173",
      "http://localhost:3030",
      "http://127.0.0.1:3030",
      "https://dreamteam-yidh.onrender.com/",
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

import { fplRoutes } from "./api/fpl/fpl.routes.js";
import { setupSocketAPI } from "./services/socket.service.js";

// routes

app.use("/api", fplRoutes);
setupSocketAPI(server);

app.get("/**", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

import { logger } from "./services/logger.service.js";
const port = process.env.PORT || 3030;
server.listen(port, () => {
  logger.info("Server is running on port: " + port);
});
