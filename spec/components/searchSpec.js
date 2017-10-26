var expect = chai.expect;

describe('search', function() {
  var element, scope, youTubeSearchMock, resultSpy;

  beforeEach(module('video-player'));

  beforeEach(module('templates'));
  beforeEach(inject(function($rootScope, $compile, youTube) {
    resultSpy = sinon.spy();
    scope = $rootScope.$new();

    youTubeSearchMock = sinon.spy(function(string, callback) {
      callback(fakeVideoData);
    });

    youTube.search = youTubeSearchMock;

    scope.service = youTube;
    scope.result = resultSpy;


    element = angular.element('<search data-service="service" data-result="result"></search>');
    element = $compile(element)(scope);

    $rootScope.$digest();
  }));

  it('should have a result function on the scope', function() {
    expect(element.isolateScope().$ctrl.result).to.exist;
    expect(element.isolateScope().$ctrl.result).to.be.a('function');
  });

  it('should not use & function binding', function() {
    expect(element.isolateScope().$ctrl.result).to.equal(resultSpy);
  });

  it('should invoke search when button is clicked', function() {
    element.find('button').click();
    expect(youTubeSearchMock.callCount).to.equal(1);
  });

  it('should invoke the result function with the results of the search', function() {
    element.find('button').click();
    expect(element.isolateScope().$ctrl.result.callCount).to.equal(1);
  });


  // ADVANCED CONTENT TEST
  xit('should have access to a search service within the scope', function() {
    expect(element.isolateScope().$ctrl.service).to.exist;
    expect(element.isolateScope().$ctrl.service).to.be.a('object');
  });

});
