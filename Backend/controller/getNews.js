const news = require("../models/news");

const getNews = async(req,res) => {
    try {
        let data = await news.find({});
        res.status(200).json (data);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = getNews;