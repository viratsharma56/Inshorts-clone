const mongoose = require('mongoose');

const url = `mongodb://viratsharma:qwertyuiop@inshort-clone-shard-00-00.s4qjq.mongodb.net:27017,inshort-clone-shard-00-01.s4qjq.mongodb.net:27017,inshort-clone-shard-00-02.s4qjq.mongodb.net:27017/INSHORTS?ssl=true&replicaSet=atlas-7vct4v-shard-0&authSource=admin&retryWrites=true&w=majority`

const connectMongo = async() => {
    try {
        await mongoose.connect(url);
        console.log("Mongo connected.")     
    } catch (error) {
        console.log("Not able to connect with mongo" , error);
    }
}

module.exports = connectMongo