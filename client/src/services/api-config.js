import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? 'https://git.heroku.com/the-cellar-api.git' : 'http://localhost:3000'

const api = axios.create({
    baseURL: baseURL
})

export default api;