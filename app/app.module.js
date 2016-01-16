/**
 * Created by Vivek Bharatha on 16/1/16.
 */
var LogIt = angular.module('LogIt', ['ngRoute', 'ngMaterial']);
logIt.constant('appConfig', {
        apiUrl: 'https://api.parse.com/1/classes'
    })
    .run(['$http', function ($http) {
    $http.defaults.headers.common['X-Parse-Application-Id'] = 'PifdqDsv2FnqpmctWQcNtsitn9P1sSwphwLu7Vd8';
    $http.defaults.headers.common['X-Parse-REST-API-Key'] = 'mEP3YvpVKJbbBY9qh4F7F60dK3rnhnIg6QYqgk7n';
    $http.defaults.headers.common['Content-Type'] = 'application/json';
}]);