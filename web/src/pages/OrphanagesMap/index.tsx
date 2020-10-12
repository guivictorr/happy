import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Map, TileLayer } from 'react-leaflet';

import { Container } from './styles';

import mapMarker from '../../assets/images/mapmarker.svg';
import { animations } from '../../animations';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap: React.FC = () => {
  const { slideFromRight, opacity } = animations;

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
      </Map>

      <Link to="/">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
