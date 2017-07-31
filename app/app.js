"use strict";

let todoApp = angular.module('TodoApp', ['ngRoute'])
.constant( "FirebaseUrl", "https://todo-d36e3.firebaseio.com/");

let isAuth = (UserFactory) => {
    return new Promise( (resolve, reject) => {
        UserFactory.isAuthenticated()
        .then( (userBoolean) => {
            if(userBoolean)
             resolve();
            else
             reject();
        });
    });
};

todoApp.config( ($routeProvider ) => {
	$routeProvider
	.when('/', {
		templateUrl : 'partials/login.html',
		controller : 'UserController'
	})
	.when('/todo/view', {
		templateUrl : 'partials/todo-list.html',
		controller : 'TodoListController',
        resolve: {isAuth}
	})
    .when('/todo/new' , {
        templateUrl: 'partials/todo-form.html',
        controller: 'TodoAddController',
        resolve: {isAuth}
    })
    .when('/todo/details/:dbId', {
        templateUrl : 'partials/todo-details.html',
        controller : 'TodoDetailsController',
        resolve: {isAuth}
    })
    .when('/todo/edit/:dbId', {
        templateUrl : 'partials/todo-form.html',
        controller : 'TodoEditController',
        resolve: {isAuth}
    })
	.otherwise('/');
});
