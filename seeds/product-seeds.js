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

]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;