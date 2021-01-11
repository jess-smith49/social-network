const {User} = require('../models');

const UserController = {
    //GET ALL USERS
    getAllUsers(req, res){
        User.find({})
    }
}