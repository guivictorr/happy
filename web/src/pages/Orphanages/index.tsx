import React, { useState, useEffect, useCallback } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import api from '../../service/api';

import SideBar from '../../components/SideBar';

import { Container } from './styles';
import { animations } from '../../animations';
import mapIcon from '../../utils/mapIcon';

interface ImageProps {
  id: string;
  url: string;
}

interface DataProps {
  latitude: string;
  longitude: string;
  name: string;
  id: string;
  about: string;
  instructions: string;
  open_on_weekends: boolean;
  opening_hours: string;
  images: ImageProps[];
}

interface RouteParamsProps {
  id: string;
}

const Orphanages: React.FC = () => {
  const { slideFromTop, opacity } = animations;
  const { id } = useParams<RouteParamsProps>();
  const [orphanageData, setOrphanageData] = useState<DataProps>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleGetOrphanages = useCallback(async () => {
    const { data } = await api.get(`/orphanages/${id}`);
    setOrphanageData(data);
  }, [id]);

  useEffect(() => {
    handleGetOrphanages();
  }, []);

  if (!orphanageData) {
    return <p>Carregando</p>;
  }

  return (
    <Container initial="initial" animate="final" exit="exit" variants={opacity}>
      <motion.main initial="initial" animate="final" variants={slideFromTop}>
        <div className="orphanage-details">
          {orphanageData.images[0]?.url && (
            <img
              src={orphanageData.images[activeImageIndex]?.url}
              alt={orphanageData.name}
            />
          )}
          <div className="images">
            {orphanageData.images.map((image, index) => (
              <button
                key={image.id}
                className={activeImageIndex === index ? 'active' : ''}
                type="button"
                onClick={() => {
                  setActiveImageIndex(index);
                }}
              >
                <img src={image.url} alt={orphanageData.name} />
              </button>
            ))}
          </div>

          <div className="orphanage-details-content">
            <h1>{orphanageData.name}</h1>
            <p>{orphanageData.about}</p>

            <div className="map-container">
              <Map
                center={[
                  Number(orphanageData.latitude),
                  Number(orphanageData.longitude),
                ]}
                zoom={15}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[
                    Number(orphanageData.latitude),
                    Number(orphanageData.longitude),
                  ]}
                />
              </Map>

              <footer>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanageData.latitude},${orphanageData.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanageData.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta
                <br />
                {orphanageData.opening_hours}
              </div>
              {orphanageData.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos
                  <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos
                  <br />
                  fim de semana
                </div>
              )}
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </motion.main>
      <SideBar />
    </Container>
  );
};

export default Orphanages;
