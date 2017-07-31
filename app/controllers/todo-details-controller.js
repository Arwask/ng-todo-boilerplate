'use strict';

todoApp.controller('TodoDetailsController',function($scope, $routeParams, $window, TodoFactory ) {

    TodoFactory.getOneItem($routeParams.dbId)
    .then( (oneItem) => {
        $scope.data = oneItem;
    });

    $scope.editTask = (dbId) => {
        console.log("edit button clicked", $routeParams.dbId);
        $window.location.href = `#!/todo/edit/${$routeParams.dbId}`;
    };
});