const mongoose = require('mongoose');
const { BottleSchema } = require('./Bottle');

const BeerBrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    bottles: [BottleSchema],
});
const BeerBrand = mongoose.model('BeerBrand', BeerBrandSchema);

module.exports = {
    BeerBrandSchema,
    BeerBrand,
};
