const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include:[Product],
  }).then((data) => {

    res.json(data);
  });
  
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  
  Tag.findByPk(req.params.id, { 
    include:[Product],

  }).then((Data) => {
    res.json(Data);
  });
  
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: 'super',

  })
  .then((new_tag) => {
    // Sends the updated book as a json response
    res.json(new_tag);
  })
  .catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: 'Ultra',

  }, 
  {
    // Gets the books based on the isbn given in the request parameters
    where: {
        id: req.params.id,
    },
  })
  .then((updated_tag) => {
    // Sends the updated book as a json response
    res.json(updated_tag);
  })
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
