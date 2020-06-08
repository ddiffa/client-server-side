const router = require('express').Router();
const getWeatherByCity = require('../models/weather.js');

router.get('/:city', async(req, res) => {
    const { city } = req.params;

    const weather = await getWeatherByCity(city);

    res.json(weather.data);
});

module.exports = router;