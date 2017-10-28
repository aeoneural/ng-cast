angular.module('video-player')
.component('videoList', {
  bindings: { 
    videos: '<',
  
  },
  controller: function() {
    this.onClick = (input) => { 
      console.log('hello');
      console.log(input);
    };
   
  },
  
   
  templateUrl: 'src/templates/videoList.html' 
  

});
