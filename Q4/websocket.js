const WebSocket = require('ws');
const { WebBot } = require('./Chatbot.js');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {

    ws.on('message', (message) => {

        const response = WebBot(message);

        ws.send(response);

    });

    ws.on('close', () => {

        console.log('Connection closed.');

    });

});