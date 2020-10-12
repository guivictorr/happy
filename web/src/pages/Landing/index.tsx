import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="Happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <section>
          <strong>Natal</strong>
          <span>Rio Grande do Norte</span>
        </section>

        <a href="/">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </a>
      </div>
    </Container>
  );
};

export default Landing;
