const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

//api/user
router 
    .route('/')
    .get(getAllUsers)
    .post(createUser)
    

router
    .route('/:id')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUser)

router
    .route('/:userId/friends/friendId')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router;
