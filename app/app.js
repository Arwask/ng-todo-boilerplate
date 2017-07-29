"use strict";

let todoApp = angular.module('TodoApp', ['ngRoute'])
.constant( "FirebaseUrl", "https://todo-d36e3.firebaseio.com/");

todoApp.config( ($routeProvider ) => {
	$routeProvider
	.when('/', {
		templateUrl : 'partials/login.html',
		controller : 'UserController'
	})
	.when('/todo/view', {
		templateUrl : 'partials/todo-list.html',
		controller : 'TodoListController'
	})
    .when('/todo/new' , {
        templateUrl: 'partials/todo-form.html',
        controller: 'TodoAddController'
    })
    .when('/todo/details/:dbId', {
        templateUrl : 'partials/todo-details.html',
        controller : 'TodoDetailsController'
    })
    .when('/todo/edit/:dbId', {
        templateUrl : 'partials/todo-form.html',
        controller : 'TodoEditController'
    })
	.otherwise('/');
});
