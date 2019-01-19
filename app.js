const LOGGER = require('./common/logger');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const webSocketCookieParser = require('socket.io-cookie');
const http = require('http');
const webSocket = require('socket.io');

const login = require('./web-amqp/middleware/login');
const doLogin = require('./web-amqp/middleware/do-login');
const auth = require('./web-amqp/middleware/auth');
const registerServices = require('./web-amqp/registra-end-points');
const wsConnection = require('./web-amqp/web-socket-conn');
const amqpListener = require('./web-amqp/on-new-notificacao');

const app = express();
const httpServer = http.Server(app);
const wsServer = webSocket(http);

const APP_PORT = '3000';
const sockets = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.get('/login', login());
app.post('/login', doLogin());
app.use(auth());

registerServices(app, sockets);

app.use(express.static('web-app'));

wsServer.use(webSocketCookieParser);
wsServer.on('connection', wsConnection(sockets));

httpServer.listen(APP_PORT, () => LOGGER.log('info', 'Servindo na porta ' + APP_PORT));

amqpListener(sockets);
