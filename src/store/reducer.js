import { TOGGLE_SHOW_PSEUDO, SET_PSEUDO, MESSAGE_RECEIVE, SOMEONE_TYPING, IM_TYPING, SEND_MESSAGE, UPDATE_LIST_USERS } from './actions';

const randomNumber = Math.floor(Math.random() * Math.floor(1000));

const initialState = {
  showPseudo: false,
  pseudo: 'anonymous' + randomNumber,
  messages: [],
  pseudoWritting: [],
  imTyping: false,
  listUsers: []
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SHOW_PSEUDO:
    // Je check si imTyping est bien sur false, je peux toggle et afficher mon input
      if (!state.imTyping) {
        return {
          ...state,
          showPseudo: !state.showPseudo
        };
      } else {
        return {
          ...state
        };
      }
    case SET_PSEUDO:
      return {
        ...state,
        pseudo: action.value
      };
    case MESSAGE_RECEIVE: {
      // Je vient filter mon array pour y enlever le pseudo de celui qui vient d'envoyé le message
      const arrayPseudo = state.pseudoWritting.filter(currentPseudo => currentPseudo !== action.message.user);
      return {
        ...state,
        messages: [...state.messages, action.message],
        pseudoWritting: arrayPseudo
      };
    }
    case SOMEONE_TYPING:
      // Si le user ecrit j'ajoute son nom au state
      if (action.deleted === null) {
        return {
          ...state,
          pseudoWritting: [...state.pseudoWritting, action.pseudoWritting]
        };
      } else {
        // Je vient filter mon array pour y enlever le pseudo de celui qui supprime son message
        const arrayPseudo = state.pseudoWritting.filter(currentPseudo => currentPseudo !== action.pseudoWritting);
        return {
          ...state,
          pseudoWritting: arrayPseudo
        };
      }
    case IM_TYPING:
    // Je viens changer le statue de la clé pour pouvoir bloquer l'apparition de l'input name
    // Je viens cacher l'input si je l'avais ouvert avant de commencer a taper (l'utilisateur est fourbe)
      return {
        ...state,
        imTyping: true,
        showPseudo: false
      };
    case SEND_MESSAGE:
      // Je viens changer le statue de la clé pour pouvoir autorisé l'apparition de l'input name
      return {
        ...state,
        imTyping: false
      };
    case UPDATE_LIST_USERS:
      return {
        ...state,
        listUsers: action.users
      };
    default:
      return state;
  }
};

export default reducer;
