const news = require("../models/news");

const getNews = async(req,res) => {
    try {
        let size = Number(req.query.size);
        let skip = Number(req.query.page);
        let data = await news.find({}).limit(size).skip(skip*size);
        res.status(200).json (data);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = getNews;