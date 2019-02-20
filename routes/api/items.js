const express = require('express');

const router = express.Router();
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   GET all the Item's
// @access Public

router.get('/', (req, res) => {
    Item.find()
        .sort({date : -1})
        .then(items => res.json(items))
        .catch(err => console.log(err));
});


// @route  POST api/items
// @desc   Add an Item
// @access Public

router.post('/', (req, res) => {
  const newItem = new Item({
      name: req.body.name
  });
    newItem.save()
        .then(items => res.json(items))
        .catch(err => console.log(err))

});

// @route  POST api/items/:id
// @desc   Add an Item
// @access Public

router.delete('/:id', (req, res) => {
 Item
     .findById(req.params.id)
     .then(item => item.remove().then(() => res.json({success: true})))
     .catch(() => res.status(404).json({success: false}))

});

module.exports = router;
