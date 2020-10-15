/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../../assets/images/mapmarker.svg';

import { Container } from './styles';
import { animations } from '../../animations';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

const CreateOrphanages: React.FC = () => {
  const { goBack } = useHistory();
  const { slideFromLeft, opacity, slideFromTop } = animations;

  return (
    <Container initial="initial" animate="final" exit="exit" variants={opacity}>
      <aside>
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
      </aside>

      <main>
        <motion.form
          className="create-orphanage-form"
          initial="initial"
          animate="final"
          variants={slideFromTop}
        >
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              <Marker
                interactive={false}
                icon={happyMapIcon}
                position={[-27.2092052, -49.6401092]}
              />
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre
                <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="about" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image" />

              <button type="submit" className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </motion.form>
      </main>
    </Container>
  );
};

export default CreateOrphanages;
// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
