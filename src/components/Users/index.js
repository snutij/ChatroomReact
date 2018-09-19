import React from 'react';
import PropTypes from 'prop-types';
import './users.sass';

const Users = ({ listUsers }) => {
  return (
    <ul className="users">
      {
        listUsers.map(currentUser => (
          <li
            key={currentUser}
            className="users-user"
          >
            {currentUser}
          </li>
        ))
      }
    </ul>
  );
};

Users.propTypes = {
  listUsers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Users;
