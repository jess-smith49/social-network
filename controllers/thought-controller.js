const {Thought} = require('../models');
const User = require('../models/User');

const thoughtController = {
    //GET ALL THOUGHTS
    getAllThoughts(req, res){
        Thought.find({})
    },

    //GET SINGLE THOUGHT BY ID
    getThoughtById({params}, res){
        Thought.findOne({_id: params.id})
    },

    //POST NEW THOUGHT
    addThought({params, body}, res){
        Thought.create(body)
            .then(({_id}) => {
                return User.findOneAndUpdate(
                    {_id: params.userId},
                    {$push: {thoughts: _id}},
                    {new: true}
                );
            })
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({message: 'No User found with this ID'})
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    //PUT - UPDATE THOUGHT BY ID
    updateThoughtById({params, body}, res){
        Thought.findOneAndUpdate({_id: params.id}, body, {new: true})
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({message: 'No thought found with that id!'})
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    //DELETE A THOUGHT BY ID
    deleteThought({params}, res) {
        Thought.findOneAndDelete({_id: params.id})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    }

    
}

module.exports = thoughtController;