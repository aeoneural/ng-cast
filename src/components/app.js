angular.module('video-player')

 
.component('app', {
  controller: function() { 
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
    this.onClick = (input) => { 
      this.video = input;
      console.log(input);
    };
  
   
  }, 
  
  templateUrl: 'src/templates/app.html'



});
