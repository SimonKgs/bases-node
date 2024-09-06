// const { emailTemplate } = require('./js-foundation/1-template')
// require('./js-foundation/02-destructuring')
// const { getUserById } = require('./js-foundation/03-callbacks')

// 03-callbacks
// const id = 1;
// getUserById( id, (error, user, message) => {
//     if (error) {
//         throw new Error(error);
//     }
//     console.log({ user });
//     console.log(message);   
// });

// 04-factory functions, adapter pattern
// const { buildMakePerson } = require('./js-foundation/04-factory');
// const { getAge, getUUID } = require('./plugins')
// const makePerson = buildMakePerson({ getUUID, getAge })
// const obj = { name: 'Simón', birthdate: '1989-09-05'}
// const simon = makePerson(obj)
// console.log(simon);

// 05 promesas
// const { getPokemonById } = require('./js-foundation/05-promises')

// getPokemonById(1)
//     .then( ( pokemon ) => console.log({ pokemon }))
//     .catch( ( err ) => console.log('Something happen, Please try again'))
//     .finally(() => console.log('finalmente')
// );

// 06 async await
const { getPokemonById } = require('./js-foundation/06-async-await')

getPokemonById(1)
    .then( ( pokemon ) => console.log({ pokemon }))
    .catch( ( err ) => console.log('Something async happen:', err))
    .finally(() => console.log('finally')
);


