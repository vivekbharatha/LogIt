/**
 * Created by Vivek Bharatha on 16/1/16.
 */
LogIt.config(function($routeProvider) {
    $routeProvider.otherwise('/');
    $routeProvider
        .when('/posts', {
            templateUrl: 'app/components/posts/posts.html',
            controller: 'PostController',
            resolve: {
                _state: function (){
                    return {value: 'list'};
                }
            }
        })
    });