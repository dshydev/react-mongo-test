const { Bottle } = require('../../models');

const getBottles = (req, res, next) => {
    Bottle.find({})
        .then(bottles => res.send(bottles))
        .catch(next)
};

module.exports = getBottles;
