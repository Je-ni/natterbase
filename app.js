const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const countryRoute = require('./routes/countryRoute');
// Set up the express app
const app = express();

// Log requests to console
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes which should handle requests
app.use('/user', userRoute);
app.use('/country', countryRoute);

// Setup a route that sends back an apology message in JSON format.
app.get('/', (req, res) => res.send({
  status: 200,
  message: `I apologise once again for this lateness in submission.
            Routes include /user and /country.
            Use query for country that is, .../country?country=Nigeria`,
}));

const port = parseInt(process.env.PORT, 10) || 8000;
app.listen(port, () => console.log(`App started on port ${port}`));

module.exports = app;
