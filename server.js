const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

app.use(express.json());

// Servir index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Receber mensagens do comando ms
app.post('/ms', (req, res) => {
  const { mensagem } = req.body;
  console.log(`📡 MENSAGEM RECEBIDA: ${mensagem}`);

  // Envia a mensagem para todos os sites conectados
  io.emit('novaMensagem', mensagem);

  res.sendStatus(200);
});

// WebSocket
io.on('connection', (socket) => {
  console.log('⚡ Site conectado ao servidor');
});

server.listen(port, () => {
  console.log(`🚀 Allan-Server rodando em http://localhost:${port}`);
});
