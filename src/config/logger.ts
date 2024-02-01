import winston from 'winston';
import { ElasticsearchTransport } from 'winston-elasticsearch';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.prettyPrint({depth:4}),
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        //new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
        new ElasticsearchTransport({
            level: 'info',
            indexPrefix: 'my-api-logs',
            clientOpts: { node: 'http://localhost:9200' }
        })
    ]
});

export default logger;
