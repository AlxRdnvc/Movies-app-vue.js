import axios from 'axios'

export default class Movies {

    constructor () {
      axios.defaults.baseURL = 'http://localhost:8000/api'
    }

    getAll(){
        return axios.get('movies')
    }
}

export const movies = new Movies()