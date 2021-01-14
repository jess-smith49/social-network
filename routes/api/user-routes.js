const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUser
} = require('../../controllers/user-controller');

//api/user
router 
    .route('/')
    .get(getAllUsers)
    .get(getUserById)
    .post(createUser)
    .put(updateUserById)
    .delete(deleteUser)

router
    .route('/:userId/friends/friendId')
    .post
    .delete

module.exports = router;
