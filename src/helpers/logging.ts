import * as bunyan from 'bunyan';

const logger = bunyan.createLogger({
    name: 'Bot', // Change this lol
    level: 'info',
    streams: [
        {
            stream: process.stdout, // log to console
            level: 'info'
        }
    ]
})

export default logger;