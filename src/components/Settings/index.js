import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputShow from 'src/containers/InputShow';
import './settings.sass';

const Settings = ({showPseudo, toggleShowPseudo}) => {
  const className = classNames(
    {
      'settings-cross': !showPseudo,
      'settings-cross active': showPseudo
    }
  );
  return (
    <div className="settings">
      <p className="settings-title">Chatroom</p>
      <div className="settings-information">
        <p className={className} onClick={toggleShowPseudo} >+</p>
        { showPseudo ? <InputShow /> : null }
      </div>
    </div>
  );
};

Settings.propTypes = {
  showPseudo: PropTypes.bool.isRequired,
  toggleShowPseudo: PropTypes.func.isRequired
};

export default Settings;
