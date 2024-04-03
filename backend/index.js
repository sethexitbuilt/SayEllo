// Made by Seth Stitik Following the Chat Engine Tutorial //

// Import express and cors
const express = require("express");
const cors = require("cors");

// Import axios
const { default: axios } = require("axios");

// Create an express app
const app = express();

// Use JSON and CORS middlewares
app.use(express.json());
app.use(cors({ origin: true }));

// Authenticate user
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

// Check if user exists
  try {
const r = await axios.put(
  "https://api.chatengine.io/users/",
  { username: username, secret: username, first_name: username },
  { headers: { "private-key": "4e4cb5fd-d73e-4b0a-93b5-d7a0294d35f1" } }
);

// If user exists, return the user
return res.status(r.status).json(r.data);
} catch (e) {

// If user does not exist, create a new user
return res.status(e.response.status).json(e.response.data);
}
});

app.listen(3001);