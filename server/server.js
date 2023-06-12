const express = require('express');
const app = express();
const path = require('path');
const { Leap } = require('@leap-ai/sdk');
const dotenv = require('dotenv');
dotenv.config();
const leap = new Leap(process.env.LEAP_API_KEY);

// import router
const imageRouter = require('./routes/imageRouter')

// parses the json sent from the client
app.use(express.json());
app.use(express.static('public'));

app.use('/', imageRouter)

// catch all error handler (to a route that doesn't exist)
app.use((req, res) => {
  res.status(404).send('This is not the page you\'re looking for')
})

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
