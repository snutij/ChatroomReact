/*
 * Require
 */
var express = require('express');
var join = require('path').join;
var Server = require('http').Server;
var socket = require('socket.io');
var users = {};

/*
 * Vars
 */
var app = express();
var server = Server(app);
var io = socket(server);


/*
 * Express
 */
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


/*
 * Socket.io
 */
let id = 0;
io.on('connection', function(socket) {
  console.log('>> socket.io - connected');
  socket.on('new_user', function(pseudo) {
    socket.nickname = pseudo;
    users[socket.nickname] = socket;
    refreshListOfUsers();
  });
  socket.on('save_pseudo', function(pseudo) {
    // Suppression de la clé avec le pseudo initial random
    delete users[socket.nickname];
    // Creation d'une nouvelle clé avec le pseudo mis a jour
    socket.nickname = pseudo;
    users[socket.nickname] = socket;
    refreshListOfUsers();
  });
  socket.on('send_message', function(data) {
    data.id = ++id;
    // Ajout d'une clé private
    data.private = false;
    // Suppresion les espaces en debut de message
    let contentMsg = data.message.trim();
    // Verification si le message commence par /w
    if (contentMsg.slice(0, 3) === '/w ') {
      // Suppression du /w au debut du message qu'on va envoyer
      contentMsg = contentMsg.slice(3);
      // Recuperation de l'index du premier espace
      const index = contentMsg.indexOf(' ');
      // Si il y a bien un espace
      if (index !== -1) {
        // Recuperation du name qui est concerné par le mp
        const nameToSend = contentMsg.slice(0, index);
        // Suppression du pseudo du contenu du message
        contentMsg = contentMsg.slice(index + 1);
        // Si on a bien une clé dans users qui correspond
        if (nameToSend in users) {
          data.message = contentMsg;
          // Je viens emit un message seulement pour le socket correspondant
          data.private = true;
          users[nameToSend].emit('private', data);
        }
      }
    } else {
      io.emit('send_message', data);
    }
  });
  socket.on('typing', function(data) {
    socket.broadcast.emit('typing', data);
  });
  socket.on('disconnect', function(data) {
    delete users[socket.nickname];
    refreshListOfUsers();
  });
  const refreshListOfUsers = () => io.emit('usersnames', Object.keys(users));
});

/*
 * Server
 */
server.listen(3001, function() {
  console.log('listening on *:3001');
});

