const {Schema, model} = require('mongoose');

//Reaction Schema
const ReactionSchema = new Schema(
    {
        reactionId: {
            //fulfill requirements
        },

        reactionBody: {
            type: String,
            required: true,
            maxLenght: 280
        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now
            //format time
        }
    },
    {
        toJSON: {
            virtuals: true,
            //getter for time
        }
    }
);


//Thought Schema
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxLenght: 280

        },

        createdAt: {
            type: Date,
            default: Date.now
            //getter method o format timestamp
        },

        username: {
            type: String,
            required: true
        },

        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reactions'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    //getting reaction counts
    return this.reactions.length;
    
});

const Thought = model('Thought', ThoughtSchema);
const Reaction = model ('Reaction', ReactionSchema);

module.exports = {Reaction, Thought};


