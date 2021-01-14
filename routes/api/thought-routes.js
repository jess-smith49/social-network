const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThoughtById,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    
    

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThought)
    .post(addThought)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:reactionId')
    .delete(deleteReaction)

module.exports = router;