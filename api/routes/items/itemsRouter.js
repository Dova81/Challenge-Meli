var express = require('express');
var router = express.Router();
var itemsHandler = require('./itemsHandler')
var detailsHandler = require('./detailsHandler')

router.get('/', itemsHandler);
router.get('/:id', detailsHandler);

module.exports = router;
