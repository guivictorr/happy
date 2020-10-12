import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { Container } from './styles';

import mapMarker from '../../assets/images/mapmarker.svg';
import { animations } from '../../animations';

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

      <div />

      <Link to="/">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
