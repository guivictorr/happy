import React, { useState, useEffect, useCallback } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Dimensions, Linking, ScrollView } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { AppLoading } from 'expo';

import api from '../../services/api';

import {
  Container,
  ImagesContainer,
  Img,
  DetailsContainer,
  ContactButton,
  Title,
  Description,
  MapContainer,
  RoutesContainer,
  RoutesText,
  Separator,
  ScheduleContainer,
  ScheduleItem,
  ScheduleText,
  ContactButtonText,
} from './styles';

import mapMarkerImg from '../../assets/images/Local.png';

interface RouteParamsProps {
  orphanageId: string;
}

interface ImageProps {
  id: string;
  url: string;
}

interface OrphanageDataProps {
  latitude: number;
  longitude: number;
  name: string;
  id: string;
  about: string;
  instructions: string;
  open_on_weekends: boolean;
  opening_hours: string;
  images: ImageProps[];
}

const OrphanageDetails: React.FC = () => {
  const [orphanageData, setOrphanageData] = useState<OrphanageDataProps>();
  const route = useRoute();
  const params = route.params as RouteParamsProps;

  const handleOrphanageData = useCallback(async () => {
    const { data } = await api.get(`orphanages/${params.orphanageId}`);
    setOrphanageData(data);
  }, [params.orphanageId]);

  useEffect(() => {
    handleOrphanageData();
  }, []);

  const handleGoogleRouteNavigation = useCallback(() => {
    if (!orphanageData?.latitude && !orphanageData?.longitude) {
      return;
    }

    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${orphanageData.latitude},${orphanageData.longitude}`,
    );
  }, [orphanageData?.latitude, orphanageData?.longitude]);

  if (!orphanageData) {
    return <AppLoading />;
  }

  return (
    <Container>
      {orphanageData.images[0] && (
        <ImagesContainer>
          <ScrollView horizontal pagingEnabled>
            {orphanageData.images.map(image => (
              <Img
                key={image.id}
                style={{ width: Dimensions.get('window').width }}
                source={{
                  uri: `${image.url}`,
                }}
              />
            ))}
          </ScrollView>
        </ImagesContainer>
      )}

      <DetailsContainer>
        <Title>{orphanageData.name}</Title>
        <Description>{orphanageData.about}</Description>

        <MapContainer>
          <MapView
            initialRegion={{
              latitude: orphanageData.latitude,
              longitude: orphanageData.longitude,
              latitudeDelta: 0.013,
              longitudeDelta: 0.013,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={{ width: '100%', height: 150 }}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: orphanageData.latitude,
                longitude: orphanageData.longitude,
              }}
            />
          </MapView>

          <RoutesContainer onPress={handleGoogleRouteNavigation}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>{orphanageData.instructions}</Description>

        <ScheduleContainer>
          <ScheduleItem backgroundColor="#E6F7FB" borderColor="#B3DAE2">
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleText color="#5C8599">
              {orphanageData.opening_hours}
            </ScheduleText>
          </ScheduleItem>

          {orphanageData.open_on_weekends ? (
            <ScheduleItem backgroundColor="#EDFFF6" borderColor="#A1E9C5">
              <Feather name="info" size={40} color="#39CC83" />
              <ScheduleText color="#37C77F">
                Atendemos fim de semana
              </ScheduleText>
            </ScheduleItem>
          ) : (
            <ScheduleItem backgroundColor="#fdf0f5" borderColor="#ffbcd4">
              <Feather name="info" size={40} color="#FF669D" />
              <ScheduleText color="#FF669D">
                Não atendemos fim de semana
              </ScheduleText>
            </ScheduleItem>
          )}
        </ScheduleContainer>

        <ContactButton>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  );
};

export default OrphanageDetails;
