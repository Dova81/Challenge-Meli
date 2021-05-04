import Axios from "axios";


const server = "http://localhost:9000/api/"


const API = {
    getResults: ({ keyword, limit, offset }) => Axios.get(`${server}items?q=${keyword}&limit=${limit}&offset=${offset}`).then(response => response.data),
    getItemDetail: (id) => Axios.get(`${server}items/${id}`).then(response => response.data),
};


export default API