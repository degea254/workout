const dns = require("node:dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Home Workout API is running!");
});

const startServer = async () => {
  await connectDB();

  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
};

startServer();
