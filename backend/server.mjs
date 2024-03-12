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

// CORS Configuration
const corsOptions = {
  origin: process.env.NODE_ENV === "production" ? "https://dreamteam-yidh.onrender.com" : "*",
  credentials: true,
};

app.use(cors(corsOptions));


// Import routes and other middleware
import { fplRoutes } from "./api/fpl/fpl.routes.js";
import { setupSocketAPI } from "./services/socket.service.js";

// Routes
app.use("/api", fplRoutes);
setupSocketAPI(server);

// Serve static files for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve("public")));
}

// Fallback route for SPA
app.get("/**", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

// Start server
import { logger } from "./services/logger.service.js";
const port = process.env.PORT || 3030;
server.listen(port, () => {
  logger.info("Server is running on port: " + port);
});
