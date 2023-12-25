const { Product } = require('../models');

const productData = [
/*  ~~~FORMAT:~~~
    {
        product_name: 'Sample Product',
        price: 420.00,
        stock: 69,
        category_id: 1,
    },
*/

//Start seeds here
    {
        product_name: 'Signature Pearl Diver',
        price: 100.00,
        stock: 23,
        category_id: 2
    },
    {
        product_name: 'Pearl Necklace',
        price: 4200.00,
        stock: 69,
        category_id: 2
    },
    {
        product_name: 'Pearl Beads',
        price: 330.00,
        stock: 134,
        category_id: 2
    },
    {
        product_name: 'Deep Blue',
        price: 420.00,
        stock: 69,
        category_id: 1
    },
    {
        product_name: 'Neptunes Trident',
        price: 99000.00,
        stock: 1,
        category_id: 1
    },
    {
        product_name: 'Clam Shucker',
        price: 5.00,
        stock: 4,
        category_id: 1
    },
    {
        product_name: 'Exotic Sea Snake',
        price: 250.00,
        stock: 2,
        category_id: 1
    },
    {
        product_name: "Ursula's Grasp",
        price: 7500.00,
        stock: 3,
        category_id: 1
    },
    {
        product_name: 'Anatomically Correct Merman Statue',
        price: 50000.00,
        stock: 1,
        category_id: 1
    },
    {
        product_name: 'Knotted sail rope',
        price: 50.00,
        stock: 169,
        category_id: 2
    },
    {
        product_name: 'String of beads',
        price: 40.00,
        stock: 48,
        category_id: 2
    },
    {
        product_name: 'Sea Glass beaded necklace',
        price: 60.00,
        stock: 211,
        category_id: 2
    },
    {
        product_name: 'Signature Anchor Bottom',
        price: 5000.00,
        stock: 6,
        category_id: 4
    },
    {
        product_name: 'Anchor Eyelet',
        price: 4500.00,
        stock: 7,
        category_id: 4
    },
    {
        product_name: 'Boat hull bung plug',
        price: 20.00,
        stock: 30,
        category_id: 4
    },
    {
        product_name: 'Barnacle Cleaner',
        price: 12.00,
        stock: 220,
        category_id: 4
    },
    {
        product_name: 'Anchor Oil',
        price: 30.00,
        stock: 132,
        category_id: 4
    },
    {
        product_name: "Uncle Chase's signature Jewels",
        price: 1420.00,
        stock: 169,
        category_id: 3
    },
    {
        product_name: "Ariel's Trinkets",
        price: 975.00,
        stock: 2,
        category_id: 3
    },
    {
        product_name: 'Thick Jewel Ring',
        price: 1100.00,
        stock: 17,
        category_id: 3
    },
    {
        product_name: 'Loose Jewels',
        price: 500.00,
        stock: 209,
        category_id: 3
    },
    {
        product_name: 'Jewel Sack',
        price: 7500.00,
        stock: 15,
        category_id: 3
    },

]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
