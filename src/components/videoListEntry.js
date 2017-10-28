angular.module('video-player')

.component('videoListEntry', {
  bindings: { 
    onClick: '<',
    video: '<'
  }, 
  templateUrl: 'src/templates/videoListEntry.html' 
  
});
