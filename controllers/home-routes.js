const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product, User, Category } = require('../models');

//get all Products for the homepage
router.get('/', (req, res) => {
    console.log('======================');
    Product.findAll({
      attributes: [
        'id',
        'product_name',
        'price',
        'stock',
      ],
      include: [
        {
          model: Category,
          attributes: ['id', 'category_name'],
          include: {
            model: User,
            attributes: ['email']
          }
          },
          {
            model: User,
            attributes: ['email']
          
        },
      ]
    })
      .then(dbProductData => {
        const products = dbProductData.map(product => product.get({ plain: true }));
  
        res.render('homepage', {
          products,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //get a single product

  router.get('/product/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'product_name',
        'price',
        'stock',
      ],
      include: [
        {
          model: Category,
          attributes: ['id', 'category_name'],
          include: {
            model: User,
            attributes: ['email']
          }
        },
        {
          model: User,
          attributes: ['email']
        }
      ]
    })
      .then(dbProducttData => {
        if (!dbProductData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        const post = dbProductData.get({ plain: true });
  
        res.render('single-post', {
          post,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //login route
  router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
  
