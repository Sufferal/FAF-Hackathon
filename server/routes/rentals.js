const express = require('express');
const router = express.Router();
const {
    getRental,
    getRentalID,
    postRental,
    putRental,
    deleteRental,
} = require('../controller/rentals')


router.get('/api/rentals', getRental);
router.get('/api/rentals/:id', getRentalID)
router.post('/api/rentals', postRental);
router.put('/api/rentals/:id', putRental);
router.delete('/api/rentals/:id', deleteRental);


module.exports = router