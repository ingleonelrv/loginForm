//##########Imports##########
const express = require('express');
const http = require('http')
const bodyParser = require('body-parser');
const morgan =require('morgan')
const {mongoose} = require('./database')

//##########Initializations##########
const app = express();
//TO USE SOCKETIO
const server = http.Server(app);
//read .env and avaliable the var for system
// require('dotenv').config();

//##########Settings##########
app.set('port',process.env.PORT || 3000)

//##########Middlewares##########
app.use(morgan('dev'))
// app.use(express.json())
app.use( bodyParser.urlencoded({ extended : false }) );

//##########Routes##########
const routes = require('./routes/user');

app.use('/', routes);

//Handle errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error : err });
});

server.listen(app.get('port'), () => {
  console.log(`Server Rest started in port: ${app.get('port')}`)
});