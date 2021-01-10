// server.js
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://docker:docker@node-pg-local-dev_pg_1:5432/devdb')

app.get("/", (req, res) => {
  db.none('INSERT INTO docker VALUES($1)', Math.floor(new Date().getTime() / 1000))
  db.one('SELECT * from docker ORDER BY number DESC LIMIT 1')
    .then(function (data) {
      res.send('DATA:' + data.number);
  })
  .catch(function (error) {
    res.send('ERROR:' + error)
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});