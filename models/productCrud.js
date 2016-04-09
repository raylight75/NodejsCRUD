var sequelize = require('./index');
var Product = sequelize.import(__dirname + "/product")

exports.read = function (req, res) {
    Product.findAll({attributes: ['id', 'name', 'quantity', 'price']}).then(function (products, err) {
        if (err) return res.status(400).json(err);
        return res.status(200).json(products);
    });
}

exports.create = function (req, res) {
    var data = req.body;
    Product.create(data).then(function (products, err) {
        if (err) return res.status(400).json(err);
        return res.status(200).json(products);
    });
}

exports.edit = function (req, res) {
    var id = req.params.id;
    Product.find({where: {id: id}}).then(function (products, err) {
        if (err) return res.status(400).json(err);
        return res.status(200).json(products);
    });
}

exports.update = function (req, res) {
    var data = req.body,
        id = req.params.id;
    Product.update(data, {where: {id: id}}).then(function (products, err) {
        if (err) return res.status(400).json(err);
        return res.status(200).json(products);
    });
}

exports.delete = function (req, res) {
    var id = req.params.id;
    Product.destroy({where: {id: id}}).then(function (products, err) {
        if (err) return res.status(400).json(err);
        return res.status(200).json(products);
    });
}