import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import OrphanageDetails from '../pages/OrphanageDetails';
import CreateOrphanage from '../pages/CreateOrphanage';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Landing" component={Landing} />
      <Screen name="OrphanageDetails" component={OrphanageDetails} />
      <Screen name="CreateOrphanage" component={CreateOrphanage} />
    </Navigator>
  );
};

export default Routes;
