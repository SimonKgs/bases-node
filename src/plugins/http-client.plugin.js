const axios = require('axios');

const httpClientPlugin = {
    // AXIOS
    get: async(url) => {
        const { data } = await axios.get( url )
        return data;
        
        // Promise
        // return axios.get(url)
        //     .then( ( pokemon ) => pokemon.data)
    },

    // FETCH
    // get: async(url) => {
    //     const response = await fetch(url)
    //     return await response.json();
    // },

    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url, body) => {},
}

module.exports = {
    http: httpClientPlugin
}
