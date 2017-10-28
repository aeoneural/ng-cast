angular.module('video-player')
.service('youTube', function($http) {
  
  this.method = function(params, callback) { 
    return $http({
      method: 'GET',
      params: { 
        'q': params.query, 
        'maxResults': params.maxResults,
        'key': window.YOUTUBE_API_KEY, 
        'type': 'video', 
        'part': 'snippet'
      },
      url: 'https://www.googleapis.com/youtube/v3/search'})
      .then(function successCallback(response) {
        callback(response);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  };
  
});
