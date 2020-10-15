import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import { animations } from '../../animations';

import mapMarkerImg from '../../assets/images/mapmarker.svg';

const SideBar: React.FC = () => {
  const { slideFromLeft } = animations;
  const { goBack } = useHistory();

  return (
    <Container>
      <motion.img
        initial="initial"
        animate="final"
        exit="exit"
        variants={slideFromLeft}
        src={mapMarkerImg}
        alt="Happy"
      />

      <motion.footer
        initial="initial"
        animate="final"
        exit="exit"
        variants={slideFromLeft}
      >
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </motion.footer>
    </Container>
  );
};

export default SideBar;
