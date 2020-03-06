const fetch = require('node-fetch');

fetch('http://api.icndb.com/jokes/random/')
  .then(data => data.json())
  .then(json => console.log(json.value.joke))
  .catch(err => console.error(err));