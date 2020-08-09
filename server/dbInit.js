const db = require('./models');

const beerBrands = [
    { name: "Corona" },
    { name: "Staropramen" },
    { name: "Offenbach" },
    { name: "Lvivske" },
    { name: "1715" },
    { name: "Avtorske" },
    { name: "Poltava" },
    { name: "Chernigovske" },
    { name: "Waissburg" },
    { name: "Kozel" },
];

const beerBottles = [
    { name: "Банка" },
    { name: "Стекло" },
    { name: "Литруха" },
    { name: "Двушка" },
];

async function initWithData() {
    try {
        const isDataExist = await db.Bottle.findOne({});
        if(!isDataExist) {
            const bottles = await db.Bottle.insertMany(beerBottles);
            const brands = await db.BeerBrand.insertMany(beerBrands.map(brand => ({...brand, bottles})));
        }
        return {
            Bottle: db.Bottle,
            BeerBrand: db.BeerBrand,
        }
    } catch (err) {
        console.log('init data error', err)
    }
}

module.exports = initWithData;
