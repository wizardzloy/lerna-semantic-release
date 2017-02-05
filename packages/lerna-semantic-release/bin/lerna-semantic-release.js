#!/usr/bin/env node

var task = process.argv[2];
var io = require('lerna-semantic-release-io').default;
var log = require('lerna-semantic-release-utils').log;

var tasks = {
  pre: require('lerna-semantic-release-pre'),
  perform: require('lerna-semantic-release-perform'),
  post: require('lerna-semantic-release-post')
};

function errorHandler(err) {
  log.error(err);
  process.exit(+!!err);
}

try {
  tasks[task]({
    io: io,
    callback: errorHandler
  });
} catch(err) {
  errorHandler(err);
}
