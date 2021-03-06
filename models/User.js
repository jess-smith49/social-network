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
                ref: 'thoughts'
            }
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
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
    //friend count
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;