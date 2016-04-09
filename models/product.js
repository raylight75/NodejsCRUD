module.exports = function(sequelize, DataTypes) {
    return sequelize.define('products', {
        name: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        price: DataTypes.INTEGER
    })
}
