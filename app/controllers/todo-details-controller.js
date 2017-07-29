'use strict';

todoApp.controller('TodoDetailsController',function($scope, $routeParams, $window, TodoFactory ) {

    TodoFactory.getOneItem($routeParams.dbId)
    .then( (oneItem) => {
        $scope.data = oneItem;
    });

    $scope.editTask = (dbId) => {
        console.log("edit button clicked", dbId);
        $window.location.href = `#!/todo/edit/${dbId}`;
    };
});