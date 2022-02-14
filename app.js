// IMPORTS
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

// CONNECTIONS
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to DB...✅"))
    .catch(() => console.log("Couldn't connect to DB...❌"))

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => { return res.json({message: "API works"})});
app.use("/api/auth", require("./routes/auth.js"));

// PORT
const port = process.env.PORT
app.listen(port, () => {
    console.log("Server running...✔️")
})