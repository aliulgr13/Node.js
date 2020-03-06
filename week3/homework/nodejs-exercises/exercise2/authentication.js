'use strict';

const fetch = require('node-fetch');
//to use env to hide our login credentials
require('dotenv').config()


//first way
// fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', { headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' } })
//   .then(data => data.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

//second way with encoding the username and password to base64 using javascript code

const auth = `${process.env.BOOKS_API_USER}:${process.env.BOOKS_API_PASS}`;
const authBase64 = Buffer.from(auth, "UTF-8").toString('base64');
console.log(authBase64)

fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', {
  headers: {
    'Authorization': `Basic ${authBase64}`
  }
})
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));