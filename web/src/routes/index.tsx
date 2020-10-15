import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import CreateOrphanages from '../pages/CreateOrphanages';
import Landing from '../pages/Landing';
import Orphanages from '../pages/Orphanages';
import OrphanagesMap from '../pages/OrphanagesMap';

const Routes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/" exact component={Landing} />
        <Route path="/map-orphanages" exact component={OrphanagesMap} />
        <Route path="/create-orphanage" exact component={CreateOrphanages} />
        <Route path="/orphanages" exact component={Orphanages} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
