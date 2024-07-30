const {db} = require('../config/data.js')

const addUser = (email, username, first_name, last_name) =>{
    return db('users')
    .insert({email, username, first_name, last_name})
}

const logUser = (username, password) =>{
    return db('hashpwd')
    .insert({username, password})
}

const getUsers = () =>{
    return db('users')
    .select('*')
}

const getUser = (id) =>{
    return db('users')
    .select('*')
    .where('id', id)
}



const updateUser = (id,email, username, first_name, last_name, password) =>{
    return db('users')
    .update({email: email, username: username, first_name: first_name, last_name:last_name, password:password})
    .where('id', id)
}

const deleteOnePost = (id) =>{
    return db('posts')
    .del()
    .where('id', id)
}


module.exports = {
    addUser,
    logUser,
    getUsers,
    getUser,
    updateUser
}