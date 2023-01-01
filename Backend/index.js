const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');


const app = express();

mongoose.connect('mongodb://localhost:27017/survey', ()=> {
    console.log("connected");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);


app.get('*', (req, res) => {
    res.status(404).send({ message: 'Requested resource not found' });
  });
     
  app.use(errors());
  
  app.use((err, req, res, next) => {
    const { statusCode = 500, message } = err;
  
    res.status(statusCode).send({
      message: statusCode === 500 ? 'An error occurred on the server' : message,
    });
  });

//const port = process.env.PORT || 3000;
console.log(` app is listening on port ${port}`)