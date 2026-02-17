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

    const teams = [
      "Mumbai Indians",
      "Chennai Super Kings",
      "Royal Challengers Bengaluru",
      "Kolkata Knight Riders",
      "Rajasthan Royals",
      "Delhi Capitals",
      "Sunrisers Hyderabad",
      "Punjab Kings",
      "Gujarat Titans",
      "Lucknow Super Giants"
    ];

    let matches = [];

    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        matches.push({
          team1: teams[i],
          team2: teams[j]
        });
      }
    }

    await Match.insertMany(matches);

    res.send("45 IPL matches generated successfully 🚀");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.use("/", matchRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is running on port 5000");
});
