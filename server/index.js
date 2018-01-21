// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
var mongoDB = 'mongodb://localhost:27017/kyer-v1';
mongoose.connect(mongoDB);

// Get mongoose to use the global promise library
mongoose.Promise = global.Promise;
// Get the default connection
var db = mongoose.connection;

// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:' + port);
