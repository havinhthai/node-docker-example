const express = require('express');
const http = require('http');
const winston = require('winston');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

const logger = winston.createLogger({
	transports: [
		new (winston.transports.Console)(),
		new (winston.transports.File)({ filename: '../logs/weblog.log' }),
	],
});

app.get('/', (req, res) => {
	res.send('<h1>Hello Docker</h1>');
});

const server = http.createServer(app);

server.on('error', (error) => {
	logger.log('error', error);
});

server.listen(PORT, HOST, () => {
	logger.log('info', `Running at http://${HOST}:${PORT} at ${new Date()}`);
});

