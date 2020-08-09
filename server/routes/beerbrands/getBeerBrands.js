const { BeerBrand } = require('../../models');

const getBeerBrands = (req, res, next) => {
    BeerBrand.find({})
        .then(brands => res.send(brands))
        .catch(next)
};

module.exports = getBeerBrands;
