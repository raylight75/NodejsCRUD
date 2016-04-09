var Sequelize = require('sequelize');
module.exports = Sequelize
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
//Checking connection status
sequelize.authenticate().then(function (err) {
    if (err) {
        console.log('There is connection in ERROR');
    } else {
        console.log('Connection has been established successfully');
    }
});
module.exports = sequelize