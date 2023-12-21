const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product, User, Category } = require('../models');
const withAuth = require('../utils/auth.js');


// ----- CATEGORY ROUTES START ----- //
router.get('/category', withAuth, (req, res) => {
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
        loggedIn: req.session.loggedIn,
        loggedOut: !req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/category/:id', withAuth, (req, res) => {
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
        products,
        loggedIn: req.session.loggedIn,
        loggedOut: !req.session.loggedIn
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
  })
    .then(dbProductData => {
      const products = dbProductData.map(product => product.get({ plain: true }));
      if (!req.session.loggedIn) {
        res.render('homepage', {
          products,
          loggedIn: req.session.loggedIn,
          loggedOut: !req.session.loggedIn
        });
      } else {
        res.redirect('/category');
      };
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// ----- HOME ROUTES END ----- //


// ----- PRODUCT ROUTES START ----- //

router.get('/product', withAuth, (req, res) => {
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
        products,
        loggedIn: req.session.loggedIn,
        loggedOut: !req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



// ----- NEW JAWNS START----- //
router.get('/new/product', withAuth, (req, res) => {
  res.render('newProduct', {
    loggedIn: req.session.loggedIn,
    loggedOut: !req.session.loggedIn
  })

});

router.get('/new/category', withAuth, (req, res) => {
  res.render('newCategory', {
    loggedIn: req.session.loggedIn,
    loggedOut: !req.session.loggedIn
  })

});


// ----- NEW JAWNS END ----- //



// ----- LOGIN ROUTES START ----- //

//login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login', {
    loggedIn: req.session.loggedIn,
    loggedOut: !req.session.loggedIn
  });
});

//sign route
router.get('/signup', withAuth, (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup', {
    loggedIn: req.session.loggedIn,
    loggedOut: !req.session.loggedIn
  });
});

// ----- LOGIN ROUTES END ----- //


module.exports = router;


