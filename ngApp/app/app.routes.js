/**
 * Created by Vivek Bharatha on 16/1/16.
 */
LogIt.config(function($routeProvider) {
    $routeProvider.otherwise('/posts');
    $routeProvider
        .when('/posts', {
            templateUrl: 'app/components/post/posts.html',
            controller: 'PostController',
            resolve: {
                _state: function (){
                    return {value: 'list'};
                }
            }
        })
        .when('/add-post', {
            templateUrl: 'app/components/post/addpost.html',
            controller: 'PostController',
            resolve: {
                _state: function (){
                    return {value: 'addPost'};
                }
            }
        })
    });