var express = require('express');
var router = express.Router();

var index = require('../controller/index.controller');

router.get('/', index.render);

module.exports = router;
