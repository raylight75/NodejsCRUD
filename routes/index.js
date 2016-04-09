var express = require('express');
var Articles = require('../models/articles');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/test', function (req, res, next) {
    res.render('test', {title: 'Express', text: 'Test JS Page'});
});

router.route('/articles')
    .get(Articles.read)
    .post(Articles.create);


router.route('/articles/:id')
    .get(Articles.edit)
    .put(Articles.update)
    .delete(Articles.delete);


module.exports = router;
