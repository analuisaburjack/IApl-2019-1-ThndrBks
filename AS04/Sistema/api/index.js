const express = require('express'),
    server = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors')


var port = process.env.PORT || 8080;

const url = `mongodb+srv://vstillo:l69nHArDzsh4s2OQ@cluster0-w2p5a.gcp.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongoose running')
});

server.use(cors())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/api', require('./routes/books'))
server.use('/api', require('./routes/users'))
server.use('/api', require('./routes/libraries'))
server.listen(port);
console.log('Port: ' + port);