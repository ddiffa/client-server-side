const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api/v1/cities", require('../api/cities.js'));
app.use("/api/v1/weather", require('../api/weather.js'));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});

module.exports = app;