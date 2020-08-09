const router = require('express').Router(),
    getBeerBrands = require('./getBeerBrands');

router.get('/', getBeerBrands);

module.exports = router;
