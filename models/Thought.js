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
            //lenght 280 charater max
        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {
            //time getter
        }
    }
);


//Thought Schema
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            //and in validation for length between 1 and 280 characters

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
    return this.thoughts.reduce(
        //counts for reactions
    )
});

const Thoughts = model('Thoughts', ThoughtSchema);

module.exports = Thoughts;


