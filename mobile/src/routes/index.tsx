import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';

import Landing from '../pages/Landing';
import OrphanageDetails from '../pages/OrphanageDetails';
import CreateOrphanage from '../pages/CreateOrphanage';
import SelectMapPosition from '../pages/SelectMapPosition';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: { backgroundColor: '#f2f3f5' },
      }}
    >
      <Screen
        name="Landing"
        component={Landing}
        options={{
          headerShown: false,
          header: () => <Header title="Exemplo" />,
        }}
      />
      <Screen
        name="OrphanageDetails"
        component={OrphanageDetails}
        options={{
          header: () => <Header title="Exemplo" closeButton />,
        }}
      />
      <Screen
        name="CreateOrphanage"
        component={CreateOrphanage}
        options={{
          header: () => <Header title="Exemplo" closeButton />,
        }}
      />
      <Screen
        name="SelectMapPosition"
        component={SelectMapPosition}
        options={{
          header: () => <Header title="Exemplo" closeButton />,
        }}
      />
    </Navigator>
  );
};

export default Routes;
