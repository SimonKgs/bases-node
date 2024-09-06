
const { SHELL, NODE, OS } = process.env;

// console.log("SHELL: ", SHELL,"\nNODE: ", NODE,"\nOS: ", OS);
// console.table({ SHELL, NODE, OS });


const characters = ["Flash", "Superman", "Batman"];

const [, , batman] = characters;

// console.log(batman);

const {2:batman2} = characters;

// console.log(batman2);


