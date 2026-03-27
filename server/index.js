const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const matchRoutes = require("./routes/matchRoute");
const leagueRoutes = require("./routes/leagueRoute");
const matchSeedRoute = require("./routes/matchSeedRoute");

const Match = require("./models/Match");

const app = express();

app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

connectDB();

app.use("/api/leagues", leagueRoutes);
app.use("/api/matches", matchSeedRoute);
app.use("/", matchRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is running on port 5000");
});
