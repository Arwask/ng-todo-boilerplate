'use strict';

todoApp.factory("TodoFactory", function($q, $http, FirebaseUrl) {

	let getTodoList = (userId)  => {
		return $q( (resolve, reject) => {
			$http.get(`${FirebaseUrl}todos.json?orderBy="uid"&equalTo="${userId}"`)
			.then( (todoData) => {
				console.log("todoData",todoData.data );
				resolve(todoData.data);
			})
			.catch( (err) => {
				console.log("Error fetching data",err );
			});
		});
	};

    let getOneItem = (dbId) => {
        return $q( (resolve, reject) => {
            $http.get(`${FirebaseUrl}todos/${dbId}.json`)
            .then( (oneItem) => {
                console.log("oneItem requested: ",oneItem.data);
                resolve(oneItem.data);
            });
        });
    };

    let postNewItem = (newItem) => {
        return $q( (resolve, reject) => {
            $http.post(`${FirebaseUrl}todos.json`, 
                angular.toJson(newItem))
            .then( (newItemData) => {
                resolve(newItemData);
            })
            .catch( (err) => {
                reject(err);
            });
        });
    };

	let updateTaskStatus = (todo) => {
		// PUT the entire obj to FB
        return $q( (resolve, reject) => {
    		let itemId = todo.id;
            if(itemId) {
                $http.put(`${FirebaseUrl}todos/${itemId}.json`,
                    angular.toJson(todo))
                .then( (data) => {
                    resolve(data);
                })
                .catch( (err) => {
                    reject(err);
                });
            }
        });
	};

    let deleteTodoItem = (todoId) => {
        return $q( (resolve, reject) => {
            if(todoId) {
                $http.delete(`${FirebaseUrl}todos/${todoId}.json`)
                .then( (data) => {
                    resolve(data);
                })
                .catch( (err) => {
                    reject(err);
                });
            }
            else {
                console.log("No id passed in");
            }
        });
    };
	return { getTodoList, postNewItem, deleteTodoItem, updateTaskStatus, getOneItem};
});