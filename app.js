const express = require("express");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
	res.end('Hello there');
});


module.exports = app;
