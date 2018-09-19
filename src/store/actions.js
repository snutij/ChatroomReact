export const DO_SOMETHING = 'DO_SOMETHING';
export const TOGGLE_SHOW_PSEUDO = 'TOGGLE_SHOW_PSEUDO';
export const SET_PSEUDO = 'SET_PSEUDO';
export const SAVE_PSEUDO = 'SAVE_PSEUDO';
export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
export const UPDATE_LIST_USERS = 'UPDATE_LIST_USERS';
export const MESSAGE_RECEIVE = 'MESSAGE_RECEIVE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const IM_TYPING = 'IM_TYPING';
export const SOMEONE_TYPING = 'SOMEONE_TYPING';

export const doSomething = () => ({
  type: DO_SOMETHING
});

export const toggleShowPseudo = () => ({
  type: TOGGLE_SHOW_PSEUDO
});

export const setPseudo = (value) => ({
  type: SET_PSEUDO,
  value
});

export const savePseudo = () => ({
  type: SAVE_PSEUDO
});

export const setConnexion = () => ({
  type: WEBSOCKET_CONNECT
});

export const updateListUser = (users) => ({
  type: UPDATE_LIST_USERS,
  users
});

export const receiveMessage = (message) => ({
  type: MESSAGE_RECEIVE,
  message
});

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message
});

export const imTyping = (deleted = null) => ({
  type: IM_TYPING,
  deleted
});

export const someoneIsTyping = (data) => ({
  type: SOMEONE_TYPING,
  pseudoWritting: data.user,
  deleted: data.deleteAction
});
