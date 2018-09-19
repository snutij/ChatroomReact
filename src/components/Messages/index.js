import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './messages.sass';

const Messages = ({pseudo, messages}) => {
  return (
    <div className="messages">
      {
        messages.map(message => {
          const className = classNames(
            'message',
            {
              'myMessage': message.user === pseudo,
              'notMyMessage': message.user !== pseudo,
              'privateMessage': message.private,
              'publicMessage': !message.private
            }
          );
          return (
            <div
              key={message.id}
              className={className}
            >
              <span className="userName">
                {message.user}
              </span><br />
              {message.message}
            </div>
          );
        })
      }
    </div>
  );
};

Messages.propTypes = {
  pseudo: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    private: PropTypes.bool.isRequired
  }).isRequired).isRequired
};

export default Messages;
