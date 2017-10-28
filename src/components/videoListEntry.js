angular.module('video-player')

.component('videoListEntry', {
  bindings: { 
    video: '<',
    onClick: '<'
  }, 
  templateUrl: 'src/templates/videoListEntry.html' 
  
});
