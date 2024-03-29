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
  app.use(express.static(path.resolve("public"))); // Set up static file serving
} else {
  const corsOptions = {
    origin: [
      "http://127.0.0.1:5173",
      "http://localhost:5173",
      "http://localhost:3030",
      "http://127.0.0.1:3030",
      "https://dreamteam-1.onrender.com/",
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}
console.log("this is the dasdsad----", app.use(express.static(path.resolve("public"))));

import { fplRoutes } from "./api/fpl/fpl.routes.js";

app.use("/api", fplRoutes);

app.get("/**", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

const port = process.env.PORT || 3030;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
