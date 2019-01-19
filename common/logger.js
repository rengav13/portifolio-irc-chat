const winston = require('winston');
const formatter = require('winston-console-formatter');

const LOGGER = new winston.Logger({
  level: 'silly',
});

LOGGER.add(winston.transports.Console, formatter.config());

module.exports = LOGGER;