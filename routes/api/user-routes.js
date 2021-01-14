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
    .post(createUser)
    

router
    .route('/:id')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUser)
    
router
    .route('/:userId/friends/friendId')
    .post
    .delete

module.exports = router;
