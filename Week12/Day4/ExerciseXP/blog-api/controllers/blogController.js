const {getAllPosts,
    getOnePost,
    addNewPost,
    updateOnePost,
    deleteOnePost
} = require('../models/blogModel.js')

const _getAllPosts = async (req, res)=>{
    try {
        const result = await getAllPosts();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'something wrong'})
    }
}

const _getOnePost = async (req, res)=>{
    const {id} = req.params;
    try {
        const result = await getOnePost(id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'something wrong'})
    }
}

const _addNewPost = async (req, res)=>{
    const {title, content} = req.body;
    try {
        const result = await addNewPost(title, content);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'something wrong'})
    }
}

const _updateOnePost = async (req, res)=>{
    const {title, content} = req.body;
    const {id} = req.params;
    try {
        const result = await updateOnePost(id,title,content);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'something wrong'})
    }
}

const _deleteOnePost = async (req, res)=>{
    const {id} = req.params;
    try {
        const result = await deleteOnePost(id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'something wrong'})
    }
}

module.exports = {
    _getAllPosts,
    _getOnePost,
    _addNewPost,
    _updateOnePost,
    _deleteOnePost
}