const { Category } = require ('../models');

const categoryData = [
/*  ~~~FORMAT:~~~
    {
        category_name: 'Sample Category',
    },
*/

//Start seeds here

]

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;