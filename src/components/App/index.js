import React from 'react';
import Settings from 'src/containers/Settings';
import Users from 'src/containers/Users';
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';

import './app.sass';

const App = () => (
  <div className="app">
    <Settings />
    <Users />
    <Messages />
    <Form />
  </div>
);
export default App;
