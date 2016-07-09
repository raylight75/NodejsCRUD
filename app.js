var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
var index = require('./routes/index');
//var connection = require('express-myconnection');
var mysql = require('mysql');
var app = express();
var cors = require('cors');

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Express's caching
app.set('view cache', false);
// Disable Swig's cache
swig.setDefaults({cache: false});

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*app.use(
    connection(mysql, {
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306, //port mysql
        database: 'api'
    }, 'request')
);*/

app.use('/', index);

app.use(function (req, res, next) {
    req.app = app;
    next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

module.exports = app;
app.listen(3000);