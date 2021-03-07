const express = require("express");
const app = express();

app.use(express.json());

//Define routes
app.use('/api/navers', require('./routes/api/navers'));
app.use('/api/projects', require('./routes/api/projects'));

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({error: error.message});
})

module.exports = app;
