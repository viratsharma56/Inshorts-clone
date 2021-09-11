const express = require('express');
const port = 8000;
const connectMongo = require('./Connection/db');
const app = express();
connectMongo();
const defaultData = require('./default')

app.listen(port, ()=> console.log(`Server running at port ${port}`));

defaultData();