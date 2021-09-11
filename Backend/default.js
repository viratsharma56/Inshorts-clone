const data = require('./constants/data')
const news = require('./models/news')

const defaultData = async() => {
    try {
        await news.deleteMany({});
        await news.insertMany(data);
        console.log('Data imported into db');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = defaultData;
