{
  "_from": "accepts@~1.3.7",
  "_id": "accepts@1.3.7",
  "_inBundle": false,
  "_integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
  "_location": "/accepts",
  "_phantomChildren": {},
  "_requested": {
    "type": "range",
    "registry": true,
    "raw": "accepts@~1.3.7",
    "name": "accepts",
    "escapedName": "accepts",
    "rawSpec": "~1.3.7",
    "saveSpec": null,
    "fetchSpec": "~1.3.7"
  },
  "_requiredBy": [
    "/express"
  ],
  "_resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
  "_shasum": "531bc726517a3b2b41f850021c6cc15eaab507cd",
  "_spec": "accepts@~1.3.7",
  "_where": "C:\\Users\\Uri\\Desktop\\SmartRecycling\\node_modules\\express",
  "bugs": {
    "url": "https://github.com/jshttp/accepts/issues"
  },
  "bundleDependencies": false,
  "contributors": [
    {
      "name": "Douglas Christopher Wilson",
      "email": "doug@somethingdoug.com"
    },
    {
      "name": "Jonathan Ong",
      "email": "me@jongleberry.com",
      "url": "http://jongleberry.com"
    }
  ],
  "dependencies": {
    "mime-types": "~2.1.24",
    "negotiator": "0.6.2"
  },
  "deprecated": false,
  "description": "Higher-level content negotiation",
  "devDependencies": {
    "deep-equal": "1.0.1",
    "eslint": "5.16.0",
    "eslint-config-standard": "12.0.0",
    "eslint-plugin-import": "2.17.2",
    "eslint-plugin-markdown": "1.0.0",
    "eslint-plugin-node": "8.0.1",
    "eslint-plugin-promise": "4.1.1",
    "eslint-plugin-standard": "4.0.0",
    "mocha": "6.1.4",
    "nyc": "14.0.0"
  },
  "engines": {
    "node": ">= 0.6"
  },
  "files": [
    "LICENSE",
    "HISTORY.md",
    "index.js"
  ],
  "homepage": "https://github.com/jshttp/accepts#readme",
  "keywords": [
    "content",
    "negotiation",
    "accept",
    "accepts"
  ],
  "license": "MIT",
  "name": "accepts",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jshttp/accepts.git"
  },
  "scripts": {
    "lint": "eslint --plugin markdown --ext js,md .",
    "test": "mocha --reporter spec --check-leaks --bail test/",
    "test-cov": "nyc --reporter=html --reporter=text npm test",
    "test-travis": "nyc --reporter=text npm test"
  },
  "version": "1.3.7"
}
