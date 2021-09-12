const express = require('express');
const getNews = require('../controller/getNews.js');

const route = express.Router();

route.get('/news', getNews);

module.exports = route;