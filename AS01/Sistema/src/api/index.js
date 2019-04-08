const express = require('express');
const server = express();
const exportController = require('./controllers/export')
let router = express.Router();

var port = process.env.PORT || 8080;

router.route('/export')
    .get((req, res, next) => {
        exportController.exportBooks();
        res.send('teste');
    })

server.use('/api', router);
server.listen(port);
console.log('Port: ' + port);