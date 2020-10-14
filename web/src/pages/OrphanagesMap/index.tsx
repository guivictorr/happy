import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import { Container } from './styles';
import { animations } from '../../animations';

import mapMarker from '../../assets/images/mapmarker.svg';

const OrphanagesMap: React.FC = () => {
  const { slideFromRight, opacity } = animations;

  const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
  });

  return (
    <Container initial="initial" animate="final" exit="exit" variants={opacity}>
      <motion.aside initial="initial" animate="final" variants={slideFromRight}>
        <header>
          <img src={mapMarker} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>
        <footer>
          <strong>Natal</strong>
          <span>Rio Grande do Norte</span>
        </footer>
      </motion.aside>

      <Map
        center={[-5.7999146, -35.2922842]}
        style={{ width: '100%', height: '100%' }}
        zoom={13}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker icon={mapIcon} position={[-5.7999146, -35.2922842]}>
          <Popup
            className="map-popup"
            closeButton={false}
            minWidth={240}
            maxWidth={240}
          >
            Exemplo
            <Link to="/teste">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/" className="add-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
