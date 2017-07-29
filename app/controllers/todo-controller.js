'use strict';
//for viewing all Todo items, delete, updating completed status
todoApp.controller('TodoListController', function($scope, $window, TodoFactory, UserFactory) {
    function fetchTodos() {
        UserFactory.isAuthenticated()
        // console.log("user", UserFactory.getUser() );
        .then( (data) => {
            TodoFactory.getTodoList(UserFactory.getUser())
            .then( (todoList) => {
                console.log("todoList", todoList );
                Object.keys(todoList).forEach( (key) => {
                    todoList[key].id = key;
                });
                $scope.todos = todoList;
            })
            .catch( (err) => {
                console.log("Error!!", err);
            });
        });
    }
    fetchTodos();

    $scope.getOneItem = (dbId) => {
        TodoFactory.getOneItem(dbId);
    };
	$scope.deleteTask = (id) => {
		console.log("delete called", id);
        TodoFactory.deleteTodoItem(id)
        .then( (data) => {
            console.log("deleted", data);
            fetchTodos();
        });
		
	};

	$scope.updateTaskStatus = (todoItem) => {
        TodoFactory.updateTaskStatus(todoItem)
        .then( (data) => {
    		console.log("data after update", data);
            fetchTodos();
        });
	};

    $scope.loadForm = () => {
        $window.location.href = '/#!/todo/new';
    };

});