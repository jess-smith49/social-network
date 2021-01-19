const {User} = require('../models');

const UserController = {
    //GET ALL USERS
    getAllUsers(req, res){
        User.find()
        .select('-__v')
        .then(dbUserData => {res.json(dbUserData)})
        .catch(err => {res.json(err)});
    },

    //GET SINGLE USER BY ID
    getUserById({params}, res){
        console.log("hello");
        User.findOne({_id: params.id})
        //populate after data is created
            .then(dbUserData => {res.json(dbUserData)})
            .catch(err => {res.json(err)})
    },


    //POST A NEW USER
    createUser({body}, res){
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    //POST A NEW FRIEND
   addFriend(req,res){
       User.findOneAndUpdate(
           
               {_id: req.params.userId},
               {$addToSet: {friends: req.body.type}},
               {new: true}
           
       )
       .then((dbUserData) => {
           if (!dbUserData) {
               return res.status(404).json({message: "No user found"})
           }
           return res.json(dbUserData)
       })
       .catch(err => res.json(err));
   },

    //PUT - UPDATE A NEW USER **might need run validators
    updateUserById({params, body}, res){
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
    },

     //DELETE A FRIEND
     deleteFriend(req, res ){
        User.findOneAndUpdate
        (
            {
                _id: req.params.userId,
                $pull: {friends: req.params.friendsId},
                new: true

            }
        )
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    }
};


module.exports = UserController;