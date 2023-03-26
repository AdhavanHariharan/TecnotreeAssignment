const winston = require('winston');

const logConfiguration = {
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.timestamp({
           format: 'DD-MMM-YYYY HH:mm'
       }),
        winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    )
};

module.exports.logger = winston.createLogger(logConfiguration);