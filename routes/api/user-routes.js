const router = require('express').Router();

const{ getAllUsers, getUserById, createUser } = require('../../controllers/user-controller')

//api/user
router 
    .route('/')
    .get(getAllUsers)
    .get(getUserById)
    .post(createUser)
    .put()