var App = angular.module('services', []);

App.factory('Articles', function($http, API){
	var articles = [{titulo: 'Ola'},{titulo: 'Ola Hello'}];
	return {
		read: function(){
			return $http.get(API+'articles');
		},
		create: function(item){
			return $http.post(API+'articles', item);
		},
		profile: function(id){
			return $http.get(API+'articles/'+id);
		},
		update: function(item, id){
			return $http.put(API+'articles/'+id, item);
		},
		delete: function(id){
			return $http.delete(API+'articles/'+id);
		}
	}
})
