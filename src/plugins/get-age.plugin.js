// This is the adapter pattern
// I need to create a function, file, with the dependencies 
// then I used them inside my own function
// and my program will get the values for a function I create 
// not from the dependency directly
const getAgePlugin = require('get-age')

const getAge = (birthdate) => {
    if ( !birthdate ) return new Error('birthdate is required');

    return getAgePlugin(birthdate)
}

module.exports = {
    getAge,
}