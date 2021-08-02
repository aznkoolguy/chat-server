//helper functions to manage users

const users = [];

const addUser = ({ id, name, room }) => {
    // Javascript Mastery = javascriptmastery lowercase and one word
    name = name.trim().toLowerCase() //removes whitespace before and after
    room = room.trim().toLowerCase() //then lowercase it

    //looks to see if user already exists in chat
    const existingUser = users.find((user) => user.room === room && user.name === name);

    if(existingUser) {
        return { error: 'Username is taken' }
    }

    const user = { id, name, room }; //declares user
    users.push(user); //adds user to new array
    return { user }; //returns user so we know exaxtly who it is
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id); //finds index of user if there is a user of that index

    //means there is a user that exists with that ID
    if(index !== -1) {
        return users.splice(index, 1)[0]; //removes user from array
    }
}

//finds user with id
const getUser = (id) => users.find((user) => user.id === id);

//finds all users in a specified room
const getUsersInRoom = (room) => users.filter((user) => user.room === room)

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
