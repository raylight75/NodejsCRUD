var Sequelize = require('sequelize');
var sequelize = new Sequelize('api', 'root', '', {
    define: {
        timestamps: false
    },
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

var Product = sequelize.define('products', {});

exports.read = function (req, res) {
    Product.findAll({attributes: ['id', 'name','price']}).then(function (user) {
        return res.status(200).json(user);
    });

    /*exports.read = function (req, res) {
     sequelize.query("SELECT * FROM `products`", {type: sequelize.QueryTypes.SELECT}).then(function (users) {
     return res.status(200).json(users);
     })*/

    /*exports.read = function (req, res) {
     sequelize.query("SELECT * FROM `products`", {model: Product}).then(function (result) {
     //if (err) return res.status(400).json(err);
     return res.status(200).json(result);
     })*/

    /*exports.read = function(req, res) {
     req.getConnection(function(err,connection){
     connection.query('SELECT * FROM products',[],function(err,result){
     if(err) return res.status(400).json();

     return res.status(200).json(result);
     });
     });*/
}

exports.create = function (req, res) {
    var data = req.body;

    req.getConnection(function (err, connection) {
        connection.query('INSERT INTO products SET ?', [data], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}


exports.edit = function (req, res) {
    var id = req.params.id;

    req.getConnection(function (err, connection) {
        connection.query('SELECT * FROM products WHERE id = ?', [id], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result[0]);
        });
    });
}

exports.update = function (req, res) {
    var data = req.body,
        id = req.params.id;

    req.getConnection(function (err, connection) {
        connection.query('UPDATE products SET ? WHERE id = ? ', [data, id], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}

exports.delete = function (req, res) {
    var id = req.params.id;

    req.getConnection(function (err, connection) {
        connection.query('DELETE FROM products WHERE id = ? ', [id], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}
