const {User} = require('../models');

const UserController = {
    //GET ALL USERS
    getAllUsers(req, res){
        User.find({})
    },

    //GET SINGLE USER BY ID
    getUserById({params}, res){
        User.findOne({_id: params.id})
    },


    //POST A NEW USER
    createUser({body}, res){
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    //PUT - UPDATE A NEW USER **might need run validators
    updateUser({params, body}, res){
        User.findOneAndUpdate({_id: params.id}, body, {new: true})
            .then(dbUserData => {
                if(!dbUserData){
                    res.status(404).json({message: 'No User found with this Id'})
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    //DELETE A USER BY ID
    deleteUser({params}, res){
        User.findOneAndDelete({_id: params.id})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    }
};

module.exports = UserController;