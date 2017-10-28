angular.module('video-player')

 
.component('app', {
  controller: function() { 
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
   
  }, 
  
  templateUrl: 'src/templates/app.html'



});
