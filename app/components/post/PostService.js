/**
 * Created by v3xvard on 16/1/16.
 */
LogIt.factory('PostService', function () {
    var postService = {};
    // All Posts
    postService.getAllPosts = function () {
        return $http.get(appConfig.apiUrl + '/post');
    };
    // Create new post
    postService.createPost = function (data) {
        return $http.post(appConfig.apiUrl + '/post', data);
    };
});