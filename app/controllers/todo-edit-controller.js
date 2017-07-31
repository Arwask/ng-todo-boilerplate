'use strict'; 

todoApp.controller('TodoEditController', function($scope, $routeParams,$window, TodoFactory) {
    TodoFactory.getOneItem($routeParams.dbId)
    .then( (data) => {
        console.log(data,"data in edit");
        $scope.todoItem = data;
    });

    $scope.saveTodoItem = function() {
        console.log("$scope.todoItem", $scope.todoItem);
        let todo = $scope.todoItem;
        TodoFactory.updateTaskStatus(todo)
        .then( (data) => {
            console.log("saveTodoItem", data);
            $window.location.href = "#!/todo/view";
        });
    };
});