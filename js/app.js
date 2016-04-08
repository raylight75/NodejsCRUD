var App = angular.module('App', [
    'ngRoute',
    'controllers',
    'services',
    'angularUtils.directives.dirPagination'
]);

App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/read.html',
            controller: 'ReadCtrl'
        })

        .when('/create', {
            templateUrl: 'views/create.html',
            controller: 'CreateCtrl'
        })

        .when('/view/:id', {
            templateUrl: 'views/view.html',
            controller: 'EditCtrl'
        })

        .when('/edit/:id', {
            templateUrl: 'views/edit.html',
            controller: 'EditCtrl'
        })
});

App.value('API', 'http://localhost:3000/');
