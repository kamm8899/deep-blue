//IMPORT MODELS
const Category = require('./Category');
const Product = require('./Product');
const User = require('./User');

//associations.. do we need anything for users?
Category.hasMany(Product, {
    foreignKey: 'category_id'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

//added User associations, not directly associated with each other, cart product_id and user_id
User.belongsToMany(Product,{
   through: Cart, as:'cart', foreignKey: 'product_id', onDelete: 'cascade'});
Product.belongsToMany(User,{
    through: Cart, as:'cart', foreignKey: 'user_id', onDelete: 'cascade'});


module.exports = {
    Category, Product, User
};
