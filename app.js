const express = require('express');
const app = express();
const routes = require('./routes.js');
const bodyParser = require('body-parser');

var PORT = process.env.PORT ||4000;
app.use(express.static('./paul-movie-crud'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});
