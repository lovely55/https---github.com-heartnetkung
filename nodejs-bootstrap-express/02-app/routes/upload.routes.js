var express = require('express');
var router = express.Router();

var upload = require('../controller/upload.controller');

router.get('/', upload.render);

module.exports = router;
