const bcrypt = require('bcrypt');
const {addUser,
    logUser,
    getUsers,
    getUser,
    updateUser
} = require('../models/logModel.js')

const _addUser = async (req, res)=>{
    const {email, username, first_name, last_name} = req.body;
    try {
        const result = await addUser(email, username, first_name, last_name);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'something wrong'})
    }
}

const _logUser = async (req, res)=>{
    const {username, password} = req.body;
    try {
        const result = await logUser(username, password);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'something wrong'})
    }
}

const _getUsers = async (req, res)=>{
    try {
        const result = await getUsers();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'something wrong'})
    }
}

const _getUser = async (req, res)=>{
    const {id} = req.params;
    try {
        const result = await getUser(id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'something wrong'})
    }
}

const _updateUser = async (req, res)=>{
    const {email, username, first_name, last_name, password} = req.body;
    const {id} = req.params;
    try {
        const result = await updateUser(id,email, username, first_name, last_name, password);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({msg:'something wrong'})
    }
}

module.exports = {
    _addUser,
    _logUser,
    _getUsers,
    _getUser,
    _updateUser
}