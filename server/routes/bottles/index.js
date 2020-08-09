const router = require('express').Router(),
    getBottles = require('./getBottles');

router.get('/', getBottles);

module.exports = router;
