'use strict'; 

todoApp.controller('TodoEditController', function($scope, $routeParams, TodoFactory) {
    TodoFactory.getOneItem($routeParams.dbId)
    .then( (data) => {
        console.log(data,"data in edit");
        $scope.todoItem = data;
    });

    $scope.saveTodoItem = () => {
        TodoFactory.updateTaskStatus()
        .then( (data) => {

        });
    };
});