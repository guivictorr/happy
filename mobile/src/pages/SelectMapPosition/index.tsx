import React, { useState } from 'react';
import { Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MapView, { MapEvent, Marker } from 'react-native-maps';

import mapMarkerImg from '../../assets/images/Local.png';

import { Container, NextButton, NextButtonText } from './styles';

const SelectMapPosition: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const navigation = useNavigation();

  function handleNextStep() {
    navigation.navigate('CreateOrphanage', { position });
  }

  function handleMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  return (
    <Container>
      <MapView
        onPress={handleMapPosition}
        initialRegion={{
          latitude: -5.815382,
          longitude: -35.2214477,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      >
        {position.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
      </MapView>

      {position.latitude !== 0 && (
        <NextButton onPress={handleNextStep}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  );
};

export default SelectMapPosition;
