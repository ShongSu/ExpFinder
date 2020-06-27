const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { connectToDb } = require('./db.js');

app.use(bodyParser.json());

(async function () {
  try {
    await connectToDb();
    app.listen(3000, function () {
      console.log('API server started on port 3000');
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
})();