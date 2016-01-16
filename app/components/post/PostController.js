/**
 * Created by v3xvard on 16/1/16.
 */
LogIt.controller('PostController', ['$scope', 'PostService', '_state', function ($scope, PostService, _state) {
    if (_state.value === 'list') {
        PostService.getAllPosts().then(function success(response) {
            console.log(response);
        },
        function error(error) {
            console.log(error);
        });
    }
}]);