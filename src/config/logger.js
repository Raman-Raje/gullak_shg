import winston from 'winston';
import config from './config.js';

const isDevelopment = config.ENV;
const logFile = config.LOGFILE;
const { createLogger, format, transports } = winston;
const { colorize, combine, timestamp, printf } = format;

// Log levels
const logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
};

// Custom log levels
const loggerLevels = {
    levels: logLevels,
    colors: {
        fatal: 'red',
        error: 'red',
        warn: 'yellow',
        info: 'green',
        debug: 'blue',
        trace: 'white',
    },
};

// Custom log format
const customLogFormat = printf(({ timestamp, level, message, ...metadata }) => {
    let formattedMetadata = '';

    if (Object.keys(metadata).length > 0) {
        formattedMetadata = JSON.stringify(metadata);
    }
    return `${timestamp} [${level}]: ${message} ${formattedMetadata}`;
});

const loggerTransports = [
    // Write logs to a file in production
    ...(isDevelopment
        ? []
        : [
            new transports.File({
                filename: logFile,
                handleExceptions: true,
                maxsize: 5242880, // 5MB
                maxFiles: 5,
                tailable: true,
            }),
        ]),
    // Write logs to the console in development
    ...(isDevelopment
        ? [
            new transports.Console({
                format: combine(
                    colorize(),
                    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                    customLogFormat
                ),
                handleExceptions: true,
            }),
        ]
        : []),
];

const logger = createLogger({
    levels: loggerLevels.levels,
    transports: loggerTransports,
    exitOnError: false,
    level: 'trace',
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        customLogFormat
    ),
});

// Log uncaught exceptions
process.on('uncaughtException', (error) => {
    logger.fatal('Uncaught Exception:', error);
});

// Log unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    logger.fatal('Unhandled Rejection at:', promise, 'reason:', reason);
});

export default logger;
