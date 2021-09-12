const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const port = 8000;
const connectMongo = require('./Connection/db');
const app = express();
connectMongo();
const defaultData = require('./default');
const route = require('./routes/route');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))
app.use('/', route)

app.listen(port, ()=> console.log(`Server running at port ${port}`));

defaultData();