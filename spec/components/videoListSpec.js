var expect = chai.expect;

describe('video list', function() {
  // Load the module video-player
  beforeEach(module('video-player'));
  // Load the module that will handle caching of template html
  beforeEach(module('templates'));

  var createVideoListElement = function(addToScope, callback) {
    inject(function($rootScope, $compile) {
      var scope = $rootScope.$new();
      Object.assign(scope, addToScope);
      var element = angular.element('<video-list data-videos="videos" data-on-click="onClick"></video-list>');
      element = $compile(element)(scope);
      $rootScope.$digest();
      callback(element);
    });
  };

  it('should have a videos property on the scope', function() {
    createVideoListElement({ videos: fakeVideoData }, function(element) {
      expect(element.isolateScope().$ctrl.videos).to.exist;
      expect(element.isolateScope().$ctrl.videos).to.be.a('array');
    });
  });

  it('should have an onClick function on the scope', function() {
    createVideoListElement({ onClick: function () {} }, function(element) {
      expect(element.isolateScope().$ctrl.onClick).to.exist;
      expect(element.isolateScope().$ctrl.onClick).to.be.a('function');
    });
  });

  it('should not use & function binding', function() {
    var fakeOnClick = function () {};
    createVideoListElement({ onClick: fakeOnClick }, function(element) {
      expect(element.isolateScope().$ctrl.onClick).to.equal(fakeOnClick);
    });
  });

  it('should render 5 video list entry elements when given an array of 5 videos', function() {
    createVideoListElement({ videos: fakeVideoData }, function(element) {
      expect(element.find('.video-list-entry')).to.have.lengthOf(fakeVideoData.length);
    });
  });

  it('should render 3 video list entry elements when given an array of 3 videos', function() {
    createVideoListElement({ videos: moreFakeVideoData }, function(element) {
      expect(element.find('.video-list-entry')).to.have.lengthOf(moreFakeVideoData.length);
    });
  });


});