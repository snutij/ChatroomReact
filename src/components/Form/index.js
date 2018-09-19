import React from 'react';
import PropTypes from 'prop-types';
import IsTyping from './IsTyping';
import './form.sass';

const Form = ({sendMessage, imTyping, pseudoWritting}) => {
  return (
    <form className="chat-form" onSubmit={sendMessage} >
      <div className="chat-typing" >{pseudoWritting.length !== 0 ? <IsTyping names={pseudoWritting} /> : null }</div>
      <input className="chat-input" placeholder="Votre message --- tips /w {pseudo} to pm" onKeyUp={imTyping} />
    </form>
  );
};

Form.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  imTyping: PropTypes.func.isRequired,
  pseudoWritting: PropTypes.array.isRequired
};

export default Form;
