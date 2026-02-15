const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const matchRoutes = require("./routes/matchRoute");
const Match = require("./models/Match");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/seed", async (req, res) => {
  try {
    await Match.deleteMany();

    const matches = [
      { team1: "Netherlands", team2: "Pakistan" },
      { team1: "USA", team2: "India" },
      { team1: "Netherlands", team2: "Namibia" },
      { team1: "Pakistan", team2: "USA" },
      { team1: "Namibia", team2: "India" },
      { team1: "USA", team2: "Netherlands" },
      { team1: "USA", team2: "Namibia" },
      { team1: "India", team2: "Pakistan" },
      { team1: "Pakistan", team2: "Namibia" },
      { team1: "India", team2: "Netherlands" },
    ];

    await Match.insertMany(matches);

    res.send("match loaded finallyyyyyyyyy");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.use("/", matchRoutes);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
