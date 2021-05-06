import Axios from "axios";


const server = "http://localhost:9000/api/"


const API = {
    getResults: ({ keyword, size, offset }) => Axios.get(`${server}items?q=${keyword}&limit=${size}&offset=${offset}`).then(response => response.data),
    getItemDetail: (id) => Axios.get(`${server}items/${id}`).then(response => response.data),
};


export default API