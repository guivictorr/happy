import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Landing" component={Landing} />
    </Navigator>
  );
};

export default Routes;
