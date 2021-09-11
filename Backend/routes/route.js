const express = require('express');
const getNews = require('../controller/getNews');

const route = express.Router();

route.get('/news', getNews);

module.exports = route;