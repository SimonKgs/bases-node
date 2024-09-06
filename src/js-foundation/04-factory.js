// I can pass the "methods" functions, as parameters
// this way I make the constructor of the person with 0 dependencies
const buildMakePerson = ({ getUUID, getAge }) => {
    // Factory function is a function which creates a function
    // and is good practice use an adapter pattern
    // on plugins I can see more about the adapter pattern
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate),
        }
    }
}

module.exports = {
    buildMakePerson
} 

// explanation
// first when I call buildMakePerson I need to pass the arguments
// then it will return the function that i can store in a variable
// lets call this variable makePerson, it will store the function from inside
// once the variable is created i can call it with and object
//eg:
// const makePerson = buildMakePerson({ getUUID, getAge })

// const obj = { name: 'Simón', birthdate: '1989-09-05'}

// const simon = makePerson(obj)

// console.log(simon);