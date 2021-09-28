const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product, User, Category } = require('../models');


// ----- CATEGORY ROUTES START ----- //
router.get('/category', (req, res) => {
  console.log('======================');
  Category.findAll({
    attributes: [
      'id',
      'category_name',
    ],
  })
    .then(dbCategoryData => {
      const category = dbCategoryData.map(category => category.get({ plain: true }));

      res.render('category', {
        category,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/category/:id', (req, res) => {
  Product.findAll({
    where: {
      category_id: req.params.id
    },
    attributes: [
      'product_name',
      'price',
      'stock'
    ],
    include: [
      {
        model: Category,
        attributes: ['id', 'category_name']
      }
    ]
  })
    .then(dbProductData => {
      const products = dbProductData.map(product => product.get({ plain: true }));
      console.log(products);
      res.render('product', {
        products
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// ----- CATEGORY ROUTES END ----- //




// ----- HOME ROUTES START ----- //

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
    // include: [
    //   {
    //     model: Category,
    //     attributes: ['id', 'category_name'],
    //     include: {
    //       model: User,
    //       attributes: ['email']
    //     }
    //     },
    //     {
    //       model: User,
    //       attributes: ['email']

    //   },
    // ]
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
// ----- HOME ROUTES END ----- //


// ----- PRODUCT ROUTES START ----- //

router.get('/product', (req, res) => {
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
      },
    ]
  })
    .then(dbProductData => {
      const products = dbProductData.map(product => product.get({ plain: true }));
      console.log(products);
      res.render('product', {
        products
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get a single product
router.get('/product/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'product_name',
      'price',
      'stock',
    ],
    // include: [
    //   {
    //     model: Category,
    //     attributes: ['id', 'category_name'],
    //     include: {
    //       model: User,
    //       attributes: ['email']
    //     }
    //   },
    //   {
    //     model: User,
    //     attributes: ['email']
    //   }
    // ]
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const product = dbProductData.get({ plain: true });

      res.render('product', {
        product,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// ----- PRODUCT ROUTES END ----- //


// ----- LOGIN ROUTES START ----- //

//login route/ homepage
router.get('/homepage', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('homepage');
});


// ----- LOGIN ROUTES END ----- //


module.exports = router;