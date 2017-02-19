#!/usr/bin/env node

var meow = require('meow');
var io = require('lerna-semantic-release-io').default;
var log = require('lerna-semantic-release-utils').log;

var cli = meow(
  {
    help: `
      Usage
        $ lerna-semantic-release [command]
        
      Commands: 
        pre       Set up the versions, tags and commits
        perform   Publishes to npm
        post      Generates a changelog in each package in a file named CHANGELOG.md - will not commit or push that file. If you want to do something with it, you will need to do this manually.
    `,
  },
  {
    alias: {
      h: 'help'
    }
  }
);

var task = cli.input && cli.input[0];

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
    flags: cli.flags,
    io: io,
    callback: errorHandler
  });
} catch(err) {
  errorHandler(err);
}
