if (typeof window !== 'undefined') {
  module.exports = {
    error: window.console.error,
    warn: window.console.warn,
    log: window.console.log,
    info: window.console.log,
  };
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