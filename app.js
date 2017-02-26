const express = require('express');
const app = express();
const routes = require('./routes.js');
const bodyParser = require('body-parser');

var PORT = 4000;

app.use(bodyParser.json());
app.use('/', routes);

app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});
