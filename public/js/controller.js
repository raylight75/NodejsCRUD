var App = angular.module('controllers', []);

App.controller('ReadCtrl', function ($scope, Articles, $route) {
    $scope.articles = [];
    $scope.notFound = false;
    Articles.read().then(function (data) {
        $scope.articles = data.data;
        console.log(data.data);
        if (data.data.length == 0) {
            $scope.notFound = true;
        }
    }, function (data) {
        console.log("data", data);
    });

    $scope.delete = function (id) {
        Articles.delete(id).then(function (data) {
            console.log(data);
            $route.reload();
        });
    }
});

App.controller('CreateCtrl', function ($scope, Articles, $location) {
    $scope.create = function (article) {
        var data = {
            id: $scope.id,
            name: $scope.name,
            quantity: $scope.quantity,
            price: $scope.price
        };
        Articles.create(data).then(function (data) {
            $location.path('/');
        });
    }
});

App.controller('EditCtrl', function ($scope, Articles, $routeParams, $location) {
    var id = $routeParams.id;
    Articles.edit(id).then(function (data) {
        $scope.item = data.data;
    })

    $scope.update = function (item) {
        console.log(item);
        Articles.update(item, item.id).then(function (data) {
            $location.path('/');
        });
    }
});
