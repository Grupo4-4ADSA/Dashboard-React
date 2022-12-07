import axios from 'axios'

const Api = axios.create({
    baseURL: "http://54.81.135.30:8002/"
});
const ApiCln = axios.create({
    baseURL: "http://localhost/registros/"
});

const ApiLogin = axios.create({
    baseURL: "http://54.81.135.30:8002/usuarios/"
});



export default {Api, ApiCln, ApiLogin};