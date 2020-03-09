const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const axios = require('axios');
const APIKEY = require('./sources/keys.json').API_KEY;

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static("static"));

app.get('/', (req, res) => {
  const greeting = `Weather App `
  res.render('index', { greeting })
});

app.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIKEY}`)
    .then(cityInfos => {
      const celcius = Math.round(cityInfos.data.main.temp - 273);
      res.render('index', { weatherInfos: `Hello there, today the weather in ${cityInfos.data.name} is ${celcius} °C` })
    })
    .catch(err => {
      if (err.response) {
        res.render('index', { weatherText: `Opps,There is ${err.response.data.cod} error ${err.response.data.message}` })
      } else if (error.request) {
        res.render('index', { weatherText: `Opps,There is ${error.request}` })
      }
    })
});

app.listen(3000); 