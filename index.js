var express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
require('dotenv').config()

const port = (process.env.PORT || 3000);

var app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(routes)

app.listen(port, () => console.log(`Listening on port ${port}`));