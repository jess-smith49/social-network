const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThoughtById,
    deleteThought
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .get(getThoughtById)
    .post(addThought)
    .put(updateThoughtById)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post()
    .delete()

module.exports = router;