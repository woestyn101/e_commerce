const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include:[Product],
  }).then((categories) => {

    res.json(categories);
  });

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  Category.findByPk(req.params.id, { 
    include:[Product],

  }).then((Data) => {
    res.json(Data);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: 'Pants',

  })
  .then((new_cat) => {
    // Sends the updated book as a json response
    res.json(new_cat);
  })
  .catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: 'LongPants',

  }, 
  {
    // Gets the books based on the isbn given in the request parameters
    where: {
        id: req.params.id,
    },
  })
  .then((updated_cat) => {
    // Sends the updated book as a json response
    res.json(updated_cat);
  })
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
