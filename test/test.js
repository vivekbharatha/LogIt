var request = require('supertest');
var server = require('../server');
describe('loading express', function () {

	it('responds to /', function testSlash(done) {
		request(server).get('/').expect(200, done);
	});

	it('400 everything else', function testPath(done) {
		request(server).get('/who/knows').expect(404, done);
	});

});