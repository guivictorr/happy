import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { animations } from '../../animations';

import logo from '../../assets/images/logo.svg';

const Landing: React.FC = () => {
  const { slideFromRight, slideFromTop, opacity, slideFromLeft } = animations;

  return (
    <Container>
      <motion.div
        initial="initial"
        animate="final"
        exit="exit"
        variants={opacity}
      >
        <motion.img
          src={logo}
          alt="Happy"
          initial="initial"
          animate="final"
          variants={slideFromTop}
        />
        <motion.main
          initial="initial"
          animate="final"
          variants={slideFromRight}
        >
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </motion.main>

        <motion.section
          initial="initial"
          animate="final"
          variants={slideFromLeft}
        >
          <strong>Natal</strong>
          <span>Rio Grande do Norte</span>
        </motion.section>

        <Link to="/orphanages">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </motion.div>
    </Container>
  );
};

export default Landing;
