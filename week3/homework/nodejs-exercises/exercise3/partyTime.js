'use strict';
const fetch = require('node-fetch');

const participant = {
  "name": "Klaus",
  "numberOfPeople": 3
}
// to be able to show the result we have to write res.text()
fetch('https://reservation100-sandbox.mxapps.io/api/reservations',
  {
    method: 'POST', body: JSON.stringify(participant), headers: { 'Content-Type': 'application/json' }
  }
)
  .then(res => res.text())
  .then(json => console.log(json))
  .catch(err => console.error(err));

