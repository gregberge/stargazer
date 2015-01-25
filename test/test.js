var expect = require('chai').expect;
var exec = require('child_process').exec;

describe('Stargazer', function () {
  describe('#extract', function () {
    it('should extract stargazers from a project', function (done) {
      this.timeout(5000);
      exec('./bin/stargazer extract neoziro/stargazer', function (err, stdout) {
        if (err) return done(err);
        var users = JSON.parse(stdout);
        expect(users).to.length(1);
        expect(users[0]).to.have.property('login');
        done();
      });
    });
  });

  describe('#emails', function () {
    it('should list emails', function (done) {
      this.timeout(5000);
      exec('./bin/stargazer emails test/users.json', function (err, stdout) {
        if (err) return done(err);
        expect(stdout).to.equal('user2@mail.com\nuser3@mail.com\n');
        done();
      });
    });
  });
});
