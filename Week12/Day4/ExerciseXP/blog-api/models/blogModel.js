const {db} = require('../config/data.js')

const getAllPosts = () =>{
    return db('posts')
    .select('id', 'title', 'content')
}

const getOnePost = (id) =>{
    return db('posts')
    .select('id', 'title', 'content')
    .where('id', id)
}

const addNewPost = (title, content) =>{
    return db('posts')
    .insert({title, content})
}

const updateOnePost = (id,title,content) =>{
    return db('posts')
    .update({title: title, content: content})
    .where('id', id)
}

const deleteOnePost = (id) =>{
    return db('posts')
    .del()
    .where('id', id)
}


module.exports = {
    getAllPosts,
    getOnePost,
    addNewPost,
    updateOnePost,
    deleteOnePost
}