const url = require('url');
const { BeerBrand } = require('../../models');
const { escapeRegex } = require('../../../utils/common');

const getBeerBrands = (req, res, next) => {
    const queryObject = url.parse(req.url,true).query;
    const filter = queryObject.search ? { 'name': new RegExp(escapeRegex(queryObject.search), 'gi') } : {};

    BeerBrand.find(filter)
        .then(brands => res.send(brands))
        .catch(next)
};

module.exports = getBeerBrands;
