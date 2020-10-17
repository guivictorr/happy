import React from 'react';
import { Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

import mapMarkerImg from '../../assets/images/Local.png';

import { Container, NextButton, NextButtonText } from './styles';

const SelectMapPosition: React.FC = () => {
  const navigation = useNavigation();

  function handleNextStep() {
    navigation.navigate('CreateOrphanage');
  }

  return (
    <Container>
      <MapView
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      >
        <Marker
          icon={mapMarkerImg}
          coordinate={{ latitude: -27.2092052, longitude: -49.6401092 }}
        />
      </MapView>

      <NextButton onPress={handleNextStep}>
        <NextButtonText>Próximo</NextButtonText>
      </NextButton>
    </Container>
  );
};

export default SelectMapPosition;
