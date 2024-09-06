const users = [
    {
        id: 1,
        name: 'Jhon doe',
    },
    {
        id: 2,
        name: 'Jane doe',
    },
]


const getUserById = ( id, callback ) => {
   const user = users.find( user => user.id === id);

   if (!user){
    return callback(`USER NOT FOUND WITH ID: ${id}`)
   }

   return callback( null, user, "Message");

}

module.exports = {
    getUserById,
}