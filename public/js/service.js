var App = angular.module('services', []);

App.factory('Articles', function($http, API){
	return {
		read: function(){
			return $http.get(API+'articles');
		},
		create: function(item){
			return $http.post(API+'articles', item);
		},
		view: function(id){
			return $http.get(API+'articles/'+id);
		},
		edit: function(id){
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
