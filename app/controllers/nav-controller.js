'use strict';
                                                          // 'da heck is this?
todoApp.controller("NavController", function($scope, $window, UserFactory) {

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $scope.isLoggedIn = true;
      $scope.$apply();
      console.log("user logged in", user);
    } else {
      $scope.isLoggedIn = false;
      $scope.$apply();
      console.log("Not logged in");
      $window.location.href = "#!/login";
    }
  });

  $scope.logout = () => {
    console.log("logout clicked");
    UserFactory.logoutUser();
  };

});
