const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth.js');

const { Product, Category, User } = require('../../models');

//get all Products
router.get('/', (req, res) => {
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
      // {
      //   model: User,
      //   attributes: ['email']
      // }
    ]
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

//Find one Product
router.get('/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
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
      },
      // {

      //   model: User,
      //   attributes: ['email']
      // }
    ]
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//create new Product
router.post('/', (req, res) => {
  if (req.session) {
    Product.create({
      product_name: req.body.product_name,
      price: req.body.price,
      category_id: req.session.category_id,
    })
      .then(dbProductData => {
        if (!dbProductData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbProductData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

//update product name
router.put('/:id', (req, res) => {
  Product.update(
    {
      product_name: req.body.product_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//route for delete product
router.delete('/:id', (req, res) => {
  console.log('id', req.params.id);
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});


module.exports = router;

