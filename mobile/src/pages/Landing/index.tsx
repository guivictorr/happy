import React, { useState, useCallback } from 'react';
import { Dimensions } from 'react-native';

import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  MarkerInfo,
  MarkerInfoText,
  Footer,
  FooterText,
  FooterButton,
} from './styles';

import mapMarker from '../../assets/images/Local.png';

interface OrphanagesDataProps {
  latitude: number;
  longitude: number;
  name: string;
  id: string;
}

const Landing: React.FC = () => {
  const [orphanagesData, setOrphanagesData] = useState<OrphanagesDataProps[]>(
    [],
  );
  const navigation = useNavigation();

  const handleOrphanagesData = useCallback(async () => {
    const { data } = await api.get('orphanages');
    setOrphanagesData(data);
  }, []);

  useFocusEffect(() => {
    handleOrphanagesData();
  });

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        initialRegion={{
          latitude: -5.815382,
          longitude: -35.2214477,
          latitudeDelta: 0.13,
          longitudeDelta: 0.13,
        }}
      >
        {orphanagesData.map(orphanage => (
          <Marker
            key={orphanage.id}
            calloutAnchor={{
              x: 2.7,
              y: 0.8,
            }}
            icon={mapMarker}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >
            <Callout
              tooltip
              onPress={() =>
                navigation.navigate('OrphanageDetails', {
                  orphanageId: orphanage.id,
                })
              }
            >
              <MarkerInfo>
                <MarkerInfoText>{orphanage.name}</MarkerInfoText>
              </MarkerInfo>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Footer style={{ elevation: 2 }}>
        <FooterText>{`${orphanagesData.length} Orfanatos encontrados`}</FooterText>
        <FooterButton onPress={() => navigation.navigate('SelectMapPosition')}>
          <Feather name="plus" size={20} color="#FFF" />
        </FooterButton>
      </Footer>
    </Container>
  );
};

export default Landing;
