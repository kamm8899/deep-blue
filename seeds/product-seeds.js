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
        product_name: 'Sample Product',
        price: 420.00,
        stock: 69,
        category_id: 1
    },
    {
        product_name: 'Sample Product 2',
        price: 420.00,
        stock: 69,
        category_id: 1
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