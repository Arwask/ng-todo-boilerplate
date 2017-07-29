'use strict';

todoApp.factory("UserFactory", function($q, $http, FirebaseUrl, FBCreds) {
	
	var config = {
		apiKey: FBCreds.api_key,
		authDomain: FBCreds.authDomain
	};
	firebase.initializeApp(config);

	let currentUser = null;
    let isAuthenticated = () => {
        return $q( (resolve, reject) => {
        	firebase.auth().onAuthStateChanged( (user) => {
        		if(user) {
        			currentUser = user.uid;
        			console.log("currentUser", currentUser );
        			// return currentUser;
                    resolve(true);
        		}
        		else { //on logout we need to set it back to null.
        			currentUser = null;
                    resolve(false);
        		}
            });
        });
    };

	let getUser = () => {
		return currentUser;
	};

	let createUser = (userObj) => {
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
		.catch( (err) => {
			console.log("Error creating User", err.message);
		});
	};

	let loginUser = (userObj) => {
    return $q( (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
      .then( (user) => {
        currentUser = user.uid;
        resolve(user);
      })
      .catch( (err) => {
        console.log("error loggin in", err.message);
      });
    });
  };

	let logoutUser = () => {
		return firebase.auth().signOut()
		.catch( (err) => {
			console.log("Error logging out", err.message);
		});
	};
	// console.log("firebase", currentUser);
	return {createUser, loginUser, logoutUser, getUser, isAuthenticated};
});