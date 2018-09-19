import React from 'react';
import PropTypes from 'prop-types';

const IsTyping = ({ names }) => {
  return (
    <React.Fragment>
      <p>
        {
          names.map(currentName => <em key={currentName}>{currentName},&nbsp;</em>)
        }
        {names.length > 1 ? 'are ' : 'is '}typing&nbsp;
      </p>
      <span>.</span><span>.</span><span>.</span>
    </React.Fragment>
  );
};

IsTyping.propTypes = {
  names: PropTypes.array.isRequired
};

export default IsTyping;
