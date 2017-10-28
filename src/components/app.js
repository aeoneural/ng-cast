angular.module('video-player')

 
.component('app', {
  
  controller: function(youTube) { 
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.input = null;
    this.selectVideo = function(input) { 
      this.currentVideo = input;
    };
    this.onClick = (input) => { 
      this.selectVideo(input);
    };

    this.callback = (input) => { 
      console.log('callback object', input.data.item);
      this.videos = input.data.items;
      this.currentVideo = input.data.items[0];
    };

    this.onButton = (input) => { 
      this.input = input; 
      console.log(this.input);
      youTube.method({key: window.YOUTUBE_API_KEY, query: this.input, maxResults: 5}, this.callback);
    };
   
  
   
  }, 
  
  templateUrl: 'src/templates/app.html'



});
