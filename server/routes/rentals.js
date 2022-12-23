const express = require('express');
const router = express.Router();
const {
    getRental,
    getRentalID,
    postRental,
    putRental,
    deleteRental,
} = require('../controller/user')


router.get('/api/user', getUser);
router.get('/api/user/:id', getUserID)
router.post('/api/user', postUser);
router.put('/api/user/:id', putUser);
router.delete('/api/user/:id', deleteUser);


module.exports = router