import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
    </Switch>
  );
};

export default Routes;
