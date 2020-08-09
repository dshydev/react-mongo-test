const mongoose = require('mongoose');

const BottleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});
const Bottle = mongoose.model('Bottle', BottleSchema);

module.exports = {
    BottleSchema,
    Bottle,
};
