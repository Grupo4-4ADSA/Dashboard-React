import axios from 'axios'

const Api = axios.create({
    baseURL: "http://localhost:8002/"
});
const ApiCln = axios.create({
    baseURL: "http://localhost/registros/"
});

const ApiLogin = axios.create({
    baseURL: "http://localhost:8002/usuarios/"
});



export default {Api, ApiCln, ApiLogin};