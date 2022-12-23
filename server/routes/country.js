const express = require('express');
const router = express.Router();
const {
    getCountry,
    getCountryID,
    postCountry,
    putCountry,
    deleteCountry,
} = require('../controller/country')


router.get('/api/country', getCountry);
router.get('/api/country/:id', getCountryID)
router.post('/api/country', postCountry);
router.put('/api/country/:id', putCountry);
router.delete('/api/country/:id', deleteCountry);


module.exports = router