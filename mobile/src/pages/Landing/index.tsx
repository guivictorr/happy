import React from 'react';
import { Dimensions } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  MarkerInfo,
  MarkerInfoText,
  Footer,
  FooterText,
  FooterButton,
} from './styles';

import mapMarker from '../../assets/images/Local.png';

const Landing: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        initialRegion={{
          latitude: -25.0624387,
          longitude: -49.5468973,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          icon={mapMarker}
          coordinate={{ latitude: -25.0624387, longitude: -49.5468973 }}
        >
          <Callout
            tooltip
            onPress={() => navigation.navigate('OrphanageDetails')}
          >
            <MarkerInfo>
              <MarkerInfoText>Exemplo</MarkerInfoText>
            </MarkerInfo>
          </Callout>
        </Marker>
      </MapView>

      <Footer style={{ elevation: 2 }}>
        <FooterText>2 Orfanatos encontrados</FooterText>
        <FooterButton onPress={() => navigation.navigate('SelectMapPosition')}>
          <Feather name="plus" size={20} color="#FFF" />
        </FooterButton>
      </Footer>
    </Container>
  );
};

export default Landing;
