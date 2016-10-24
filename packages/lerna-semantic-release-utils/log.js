if (typeof window !== 'undefined') {
  module.exports = window.console;
} else {
  var winston = require('winston');
  winston.cli();
  var logger = new winston.Logger({
    transports: [
      new (winston.transports.Console)()
    ]
  });
  module.exports = logger.cli();
};