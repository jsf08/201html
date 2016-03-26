angular.module('comment', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.test = 'Hello world!';
	$scope.comments = [
      {title:'Comment 1', album:'comment', artist:'comment', genre:'pop', art:'null', upvotes:5},
    ];
    $scope.create = function(comment) {
      return $http.post('/comments', comment).success(function(data){
        $scope.comments.push(data);
      });
    };
	$scope.addComment = function() {
      $scope.create({title:$scope.formContent, album:$scope.Album, artist:$scope.Artist, genre:$scope.Genre, art:$scope.Art, upvotes:0});
      $scope.formContent='';
      $scope.Artist='';
      $scope.Album='';
      $scope.Genre='';
      $scope.Art='';
    };
    $scope.upvote = function(comment) {
      return $http.put('/comments/' + comment._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          comment.upvotes = data.upvotes;
        });
    };
	$scope.incrementUpvotes = function(comment) {
	  $scope.upvote(comment);
    };
    $scope.getAll = function() {
      return $http.get('/comments').success(function(data){
        angular.copy(data, $scope.comments);
      });
    };
    $scope.getAll();

  }
]);
