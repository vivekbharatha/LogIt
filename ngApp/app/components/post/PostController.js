/**
 * Created by v3xvard on 16/1/16.
 */
LogIt.controller('PostController', ['$scope', 'PostService', '_state', '$location', function ($scope, PostService, _state, $location) {
    $scope.reset = function () {
        $scope.posts = [];
        $scope.title = '';
        $scope.content = '';
        $scope.selected = {};
    };
    $scope.reset();
    if (_state.value === 'list') {
        PostService.getAllPosts().then(function success(response) {
            $scope.posts = response.data.results;
                if($scope.posts.length > 0) {
                    $scope.selected = $scope.posts[0];
                }
        },
        function error(err) {
            console.log(err);
        });
    } else if (_state.value === 'newPost') {

    }

    $scope.newPost = function () {
        if ($scope.title && $scope.content) {
            PostService.createPost({title: $scope.title, content: $scope.content})
                .then(function success(response) {
                    //console.log(response);
                    if (response.status === 201) {
                        $location.path('/posts');
                    }
                },
                function error(err) {
                    console.log(err);
                });
        }
    };

    $scope.selectPost = function (post) {
        $scope.selected = post;
    }
}]);