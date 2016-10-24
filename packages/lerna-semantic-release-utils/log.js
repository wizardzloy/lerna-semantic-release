if (typeof window.console === 'undefined') {
  var winston = require('winston');

  //
  // Configure CLI output on the default logger
  //
  winston.cli();

  //
  // Configure CLI on an instance of winston.Logger
  //
  var logger = new winston.Logger({
    transports: [
      new (winston.transports.Console)()
    ]
  });
} else {
  module.exports = {
    error: console.error,
    warn: console.warn,
    log: console.log,
    info: console.log,
  };
};