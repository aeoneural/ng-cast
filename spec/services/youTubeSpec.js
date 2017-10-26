var expect = chai.expect;

describe('youtube service', function() {
  // 1. Load the module
  var youTubeService;
  
  beforeEach(module('video-player'));
  
  beforeEach(module('templates'));
  beforeEach(inject(function(youTube) {
    youTubeService = youTube;
  }));

  it('should have a function named search', function() {
    expect(youTubeService.search).to.exist;
    expect(youTubeService.search).to.be.a('function');
  });

  //TODO:
  // should accept query and callback
  // should get data from youtube with correct shape
  
});