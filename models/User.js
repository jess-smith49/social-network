const {Schema, model} = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            //required: 'Please enter a username',
            trimmed: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/]
            /*validate: {
                validator: () => Promise.resolve(false),
                message: 'Please Enter a Valid e-mail address'
            }*/
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts'
            }
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Friends'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

UserSchema.virtual('friendCount').get(function(){
    return this.friends.reduce(
        //have to fill in this virtual
    )
});

const User = model('User', UserSchema);

module.exports = User;