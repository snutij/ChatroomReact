import React from 'react';
import PropTypes from 'prop-types';

const InputShow = ({pseudo, toggleShowPseudo}) => (
  <form className="settings-inputShow" onSubmit={toggleShowPseudo}>
    <input type="text" className="settings-inputShow-input" placeholder={pseudo} />
    <button className="settings-inputShow-btn" onSubmit={toggleShowPseudo}>SAVE</button>
  </form>
);

InputShow.propTypes = {
  pseudo: PropTypes.string.isRequired,
  toggleShowPseudo: PropTypes.func.isRequired
};

export default InputShow;
