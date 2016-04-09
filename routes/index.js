var express = require('express');
var Crud = require('../models/productCrud');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/test', function (req, res, next) {
    res.render('test', {title: 'Express', text: 'Test JS Page'});
});

router.route('/articles')
    .get(Crud.read)
    .post(Crud.create);


router.route('/articles/:id')
    .get(Crud.edit)
    .put(Crud.update)
    .delete(Crud.delete);


module.exports = router;
