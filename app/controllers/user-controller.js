'use strict';

todoApp.controller('UserController', function($scope,$window, UserFactory) {
	
	$scope.account = {
		email: "" ,
		password: "" 
	};

	$scope.register = () => {
		//TODO: validate that user doesn't exist
		console.log("You clicked register");
		console.log("$scope.account", $scope.account);
		UserFactory.createUser($scope.account)
		.then( (userData) => {
			console.log("New User:", userData);
			$scope.login();
		});
	};

$scope.login = () => {
	UserFactory.loginUser($scope.account)
	.then( (data) => {
		console.log("data",data );
		$window.location.href = "#!/todo/view";
		console.log("logged in", data);
		});
	};
});