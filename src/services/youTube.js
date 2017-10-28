angular.module('video-player')
.service('youTube', function(params){
  $http({
    method: 'GET',
    data: { 
      'q': params.query, 
      'maxResults': params.maxResults,
      'key': window.YOUTUBE_API_KEY, 
      'type': video
    },
    url: 'https://www.googleapis.com/youtube/v3/search'}).then(function successCallback(response) {
      console.log(data);
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
});
