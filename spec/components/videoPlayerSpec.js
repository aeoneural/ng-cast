var expect = chai.expect;

describe('video player', function() {
  // 1. Load the module
  beforeEach(module('video-player'));
  beforeEach(module('templates'));

  var catElement, jsElement, noVideoElement;

  beforeEach(inject(function($rootScope, $compile) {
    var catScope = $rootScope.$new();
    catScope.video = fakeVideoData[0];

    var jsScope = $rootScope.$new();
    jsScope.video = moreFakeVideoData[0];

    var noVideoScope = $rootScope.$new();

    catElement = angular.element('<video-player video="video"></video-player>');
    jsElement = angular.element('<video-player video="video"></video-player>');
    noVideoElement = angular.element('<video-player video="video"></video-player>');

    catElement = $compile(catElement)(catScope);
    jsElement = $compile(jsElement)(jsScope);
    noVideoElement = $compile(noVideoElement)(noVideoScope);

    $rootScope.$digest();
  }));

  it('should correctly set video property on isolate scope', function() {
    expect(catElement.isolateScope().$ctrl.video.snippet.title).to.equal(fakeVideoData[0].snippet.title);
    expect(jsElement.isolateScope().$ctrl.video.snippet.title).to.equal(moreFakeVideoData[0].snippet.title);

    expect(catElement.isolateScope().$ctrl.video.snippet.description).to.equal(fakeVideoData[0].snippet.description);
    expect(jsElement.isolateScope().$ctrl.video.snippet.description).to.equal(moreFakeVideoData[0].snippet.description);

    expect(catElement.isolateScope().$ctrl.video.id.videoId).to.equal(fakeVideoData[0].id.videoId);
    expect(jsElement.isolateScope().$ctrl.video.id.videoId).to.equal(moreFakeVideoData[0].id.videoId);
  });

  it('should dynamically display the video title', function() {
    // Testing both cat element and js video element
    expect(catElement.text()).to.contain(fakeVideoData[0].snippet.title);
    expect(jsElement.text()).to.contain(moreFakeVideoData[0].snippet.title);
  });

  it('should dynamically display the video description', function() {
    // Testing both cat element and js video element
    expect(catElement.text()).to.contain(fakeVideoData[0].snippet.description);
    expect(jsElement.text()).to.contain(moreFakeVideoData[0].snippet.description);
  });

  it('should dynamically compute the youtube url', function() {
    // Testing both cat element and js video element
    expect(catElement.find('iframe').first().attr('src')).to.contain(`https://www.youtube.com/embed/${fakeVideoData[0].id.videoId}`);
    expect(jsElement.find('iframe').first().attr('src')).to.contain(`https://www.youtube.com/embed/${moreFakeVideoData[0].id.videoId}`);
  });

  it('should not autoplay', function() {
    expect(catElement.find('iframe').first().attr('src')).not.to.contain('autoplay');
  });

  it('should not render a videoplayer if no video is provided', function() {
    expect(noVideoElement.find('iframe')).to.have.length.below(1);
    expect(noVideoElement.text()).to.contain('Please wait');
  });
});