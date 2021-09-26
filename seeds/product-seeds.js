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
        product_name: 'Sample Product 3',
        price: 420.00,
        stock: 69,
        category_id: 1
    },
    {
        product_name: 'Sample Product 4',
        price: 420.00,
        stock: 69,
        category_id: 1
    }

]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;