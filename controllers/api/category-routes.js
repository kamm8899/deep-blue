const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/category` endpoint
router.get('/', (req, res) => {
    // find all category
    // be sure to include its associated Products
    Category.findAll({
      attributes:["id", "category_name"],
  
      indclude:[{
        attributes:["id", "product_name", "price", "stock", "category_id"],
        model: Product,
      }]
    })
    .then(dbCategoryData =>{
      if(!dbCategoryData){
        res.status(404).json({ message: 'No Category found with this id'});
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json(err);
    })
  });

  //find One product with ID
  router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    Category.findOne({
      where:{
        id: req.params.id
      },
      attributes:['id', 'category_name'],
      include:[{
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        model: Product
      }]
  
    })
    .then(dbCategoryData =>{
      if(!dbCategoryData){
        res.status(404).json({ message: 'No Category found with this id'});
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json(err);
    });
  });

  //Create new category 

  router.post('/', (req, res) => {
    console.log(req.body);
    // create a new category
    Category.create({
  
      category_name: req.body.category_name,
    })
    .then(dbCategoryData =>{
      if(!dbCategoryData){
        res.status(404).json({ message: 'No category found with this id'});
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json(err);
    });
  });


  //Update Category 
  router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where:{
          id: req.params.id
        }
      }
    )
    .then(dbCategoryData =>{
      if(!dbCategoryData){
        res.status(404).json({ message: 'No category found with this id'});
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json(err);
    });
  });

  router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Category.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbCategoryData => {
        if (!dbCategoryData) {
          res.status(404).json({ message: 'No category found with this id' });
          return;
        }
        res.json(dbCategoryData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;