import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import api from '../../service/api';

import { Container } from './styles';
import { animations } from '../../animations';

import mapMarker from '../../assets/images/mapmarker.svg';

interface DataProps {
  latitude: string;
  longitude: string;
  name: string;
  id: string;
}

const OrphanagesMap: React.FC = () => {
  const { slideFromLeft, opacity, jumpLoop } = animations;
  const [orphanageData, setOrphanageData] = useState<DataProps[]>([]);

  const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
  });

  const handleGetOrphanages = useCallback(async () => {
    const { data } = await api.get('/orphanages');
    setOrphanageData(data);
  }, []);

  useEffect(() => {
    handleGetOrphanages();
  }, []);

  return (
    <Container initial="initial" animate="final" exit="exit" variants={opacity}>
      <motion.aside initial="initial" animate="final" variants={slideFromLeft}>
        <header>
          <motion.img
            variants={jumpLoop}
            animate="animation"
            src={mapMarker}
            alt="Happy"
          />
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

        {orphanageData.map(orphanage => (
          <Marker
            icon={mapIcon}
            position={[Number(orphanage.latitude), Number(orphanage.longitude)]}
            key={orphanage.id}
          >
            <Popup
              className="map-popup"
              closeButton={false}
              minWidth={240}
              maxWidth={240}
            >
              {orphanage.name}
              <Link to={`/orphanages/details/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Link to="/orphanages/create" className="add-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
