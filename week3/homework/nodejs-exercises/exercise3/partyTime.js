'use strict';
const fetch = require('node-fetch');

const participant = {
  "name": "Klaus",
  "numberOfPeople": 3
}

fetch('https://reservation100-sandbox.mxapps.io/api/reservations',
  {
    method: 'POST', body: JSON.stringify(participant), headers: { 'Content-Type': 'application/json' }
  }
)
  //.then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));

