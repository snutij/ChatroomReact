import { WEBSOCKET_CONNECT, receiveMessage, SEND_MESSAGE, IM_TYPING, someoneIsTyping, SAVE_PSEUDO, updateListUser } from './actions';

// Stockera la connexion au WebSocket client émis par le serveur.
let socket;

const socketMiddelware = store => next => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      console.log('connecté!');
      socket = window.io('http://localhost:3001'); // connexion au WebSocket
      const { pseudo } = store.getState();
      socket.emit('new_user', pseudo);
      socket.on('usersnames', (users) => {
        store.dispatch(updateListUser(users));
      });
      socket.on('send_message', (message) => {
        store.dispatch(receiveMessage(message));
      });
      socket.on('typing', (data) => {
        // Je vérifie si le pseudo qui est en train d'écrire que m'envoit le serveur est deja dans mon tableau
        // Si oui je ne fait rien
        // Si non je dispatch l'action pour venir l'ajouter a mon state
        const { pseudoWritting } = store.getState();
        const alreadyWritting = pseudoWritting.includes(data.user);
        if (!alreadyWritting || data.deleteAction === 'message_deleted') store.dispatch(someoneIsTyping(data));
      });
      socket.on('private', (message) => {
        store.dispatch(receiveMessage(message));
      });
    }
      break;
    case SEND_MESSAGE: {
      const { pseudo } = store.getState();
      let message = {
        user: pseudo,
        message: action.message
      };
      socket.emit('send_message', message);
      break;
    }
    case IM_TYPING:
      const { pseudo } = store.getState();
      const data = {
        user: pseudo,
        deleteAction: action.deleted
      };
      socket.emit('typing', data);
      break;
    case SAVE_PSEUDO: {
      const { pseudo } = store.getState();
      socket.emit('save_pseudo', pseudo);
    }
  };
  next(action);
};

export default socketMiddelware;
