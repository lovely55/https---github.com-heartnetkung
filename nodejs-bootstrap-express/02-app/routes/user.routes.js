var express = require('express');
var router = express.Router();

module.exports = function (app) {
    var user = require('../controller/user.controller');
    app.post('/user',user.login)
};


// var users = require('../controller/user.controller');

// router.get('/', users.send);

// module.exports = router;