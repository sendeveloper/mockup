import React from 'react';
import { Route, Link } from 'react-router-dom';
import Engagement from '../engagement';
import User from '../user';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Engagement} />
      <Route exact path="/engagement" component={Engagement} />
      <Route exact path="/user" component={User} />
    </main>
  </div>
);

export default App;
