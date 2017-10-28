angular.module('video-player')

.component('search', {
  bindings: { 
    onButton: '<', 
    onInput: '<',
  }, 
  templateUrl: 'src/templates/search.html' 
});
