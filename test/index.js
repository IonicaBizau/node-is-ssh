// Dependencies
var IsSsh = require("../lib")
  , Assert = require("assert")
  ;

// Prepare the input data
var input = [
    // Secure Shell Transport Protocol (SSH)
    ["ssh://user@host.xz:port/path/to/repo.git/", true]
  , ["ssh://user@host.xz/path/to/repo.git/", true]
  , ["ssh://host.xz:port/path/to/repo.git/", true]
  , ["ssh://host.xz/path/to/repo.git/", true]
  , ["ssh://user@host.xz/path/to/repo.git/", true]
  , ["ssh://host.xz/path/to/repo.git/", true]
  , ["ssh://user@host.xz/~user/path/to/repo.git/", true]
  , ["ssh://host.xz/~user/path/to/repo.git/", true]
  , ["ssh://user@host.xz/~/path/to/repo.git", true]
  , ["ssh://host.xz/~/path/to/repo.git", true]
  , ["user@host.xz:/path/to/repo.git/", true]
  , ["user@host.xz:~user/path/to/repo.git/", true]
  , ["user@host.xz:path/to/repo.git", true]
  , ["host.xz:/path/to/repo.git/", true]
  , ["host.xz:path/to/repo.git", true]
  , ["host.xz:~user/path/to/repo.git/", true]
  , ["rsync://host.xz/path/to/repo.git/", true]

    // Git Transport Protocol
  , ["git://host.xz/path/to/repo.git/", false]
  , ["git://host.xz/~user/path/to/repo.git/", false]

    // HTTP/S Transport Protocol
  , ["http://host.xz/path/to/repo.git/", false]
  , ["https://host.xz/path/to/repo.git/", false]

    // Local (Filesystem) Transport Protocol
  , ["/path/to/repo.git/", false]
  , ["path/to/repo.git/", false]
  , ["~/path/to/repo.git", false]
  , ["file:///path/to/repo.git/", false]
  , ["file://~/path/to/repo.git/", false]
];

// Run the tests
input.forEach(function (c) {
    it(c[0] + " is supposed " + (!c[1] ? "not " : "") + "to be a ssh url", function (cb) {
        Assert.equal(IsSsh(c[0]), c[1]);
        cb();
    });
});
