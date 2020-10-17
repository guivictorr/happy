import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { ScrollView } from 'react-native';

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

const OrphanageDetails: React.FC = () => {
  return (
    <Container>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          <Img
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
          <Img
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
          <Img
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>Orf. Esperança</Title>
        <Description>
          Presta assistência a crianças de 06 a 15 anos que se encontre em
          situação de risco e/ou vulnerabilidade social.
        </Description>

        <MapContainer>
          <MapView
            initialRegion={{
              latitude: -27.2092052,
              longitude: -49.6401092,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
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
                latitude: -27.2092052,
                longitude: -49.6401092,
              }}
            />
          </MapView>

          <RoutesContainer>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>
          Venha como se sentir a vontade e traga muito amor e paciência para
          dar.
        </Description>

        <ScheduleContainer>
          <ScheduleItem backgroundColor="#E6F7FB" borderColor="#B3DAE2">
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleText color="#5C8599">
              Segunda à Sexta 8h às 18h
            </ScheduleText>
          </ScheduleItem>
          <ScheduleItem backgroundColor="#EDFFF6" borderColor="#A1E9C5">
            <Feather name="info" size={40} color="#39CC83" />
            <ScheduleText color="#37C77F">Atendemos fim de semana</ScheduleText>
          </ScheduleItem>
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
