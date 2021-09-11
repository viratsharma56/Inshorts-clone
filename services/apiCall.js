import axios from "axios";

const url = "http://localhost:8000"

const getNews = async() => {
    try {
        return await axios.get(`${url}/news`);
    } catch (error) {
        console.log('Error while calling news api', error);
    }
}