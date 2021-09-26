const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/category', categoryRoutes);


module.exports = router;