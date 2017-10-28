angular.module('video-player')

 
.component('app', {
  controller: function() { 
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.selectVideo = function(input) { 
      this.currentVideo = input;
    };
    this.onClick = (input) => { 
      this.selectVideo(input);
    };
  
   
  }, 
  
  templateUrl: 'src/templates/app.html'



});
