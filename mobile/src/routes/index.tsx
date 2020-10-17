import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';

import Landing from '../pages/Landing';
import OrphanageDetails from '../pages/OrphanageDetails';
import CreateOrphanage from '../pages/CreateOrphanage';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f2f3f5' },
      }}
    >
      <Screen name="Landing" component={Landing} />
      <Screen
        name="OrphanageDetails"
        component={OrphanageDetails}
        options={{
          headerShown: true,
          header: () => <Header title="Exemplo" />,
        }}
      />
      <Screen name="CreateOrphanage" component={CreateOrphanage} />
    </Navigator>
  );
};

export default Routes;
