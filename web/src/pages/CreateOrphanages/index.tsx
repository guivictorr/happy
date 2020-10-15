/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, useCallback, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';

import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import SideBar from '../../components/SideBar';

import { Container } from './styles';
import { animations } from '../../animations';
import mapIcon from '../../utils/mapIcon';
import api from '../../service/api';

interface FormProps {
  name: string;
  about: string;
  instructions: string;
  latitude: number;
  longitude: number;
  open_on_weekends: boolean;
  opening_hours: string;
  images: File[];
}

const CreateOrphanages: React.FC = () => {
  const { opacity, slideFromTop } = animations;
  const history = useHistory();
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [model, setModel] = useState<FormProps>({
    name: '',
    about: '',
    instructions: '',
    latitude: 0,
    longitude: 0,
    open_on_weekends: false,
    opening_hours: '',
    images: [],
  });

  const updateModel = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setModel({
        ...model,
        [event.target.name]: event.target.value,
      });
    },
    [model],
  );

  const onSubmit = useCallback(
    async (event: ChangeEvent<HTMLFormElement>) => {
      try {
        event.preventDefault();

        const data = new FormData();

        data.append('name', model.name);
        data.append('about', model.about);
        data.append('instructions', model.name);
        data.append('latitude', String(model.latitude));
        data.append('longitude', String(model.longitude));
        data.append('open_on_weekends', String(model.open_on_weekends));
        data.append('opening_hours', model.opening_hours);

        model.images.forEach(image => {
          data.append('images', image);
        });

        await api.post('/orphanages', data);

        toast.success('Cadastro realizado', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        history.goBack();
      } catch (err) {
        toast.error('Preencha os campos', {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    },
    [model],
  );

  const handleMapMarker = useCallback(
    (event: LeafletMouseEvent) => {
      const { lat, lng } = event.latlng;
      setModel({
        ...model,
        latitude: lat,
        longitude: lng,
      });
    },
    [model],
  );

  const handleSelectImages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return;
      }

      const images = Array.from(event.target.files);

      setModel({
        ...model,
        images,
      });

      const imagesPreview = images.map(image => {
        return URL.createObjectURL(image);
      });

      setPreviewImages(imagesPreview);
    },
    [model],
  );

  return (
    <Container initial="initial" animate="final" exit="exit" variants={opacity}>
      <SideBar />
      <main>
        <motion.form
          className="create-orphanage-form"
          initial="initial"
          animate="final"
          variants={slideFromTop}
          onSubmit={onSubmit}
        >
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-5.8136462, -35.2109611]}
              style={{ width: '100%', height: 280 }}
              zoom={12}
              onClick={handleMapMarker}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {model.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[model.latitude, model.longitude]}
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                value={model.name}
                onChange={updateModel}
                required
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre
                <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="about"
                maxLength={300}
                name="about"
                value={model.about}
                onChange={updateModel}
                required
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>
              <div className="images-container">
                {previewImages.map(image => (
                  <img src={image} alt={model.name} key={image} />
                ))}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>

                <input
                  type="file"
                  id="image[]"
                  hidden
                  multiple
                  onChange={handleSelectImages}
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                name="instructions"
                value={model.instructions}
                onChange={updateModel}
                required
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário</label>
              <input
                id="opening_hours"
                name="opening_hours"
                value={model.opening_hours}
                onChange={updateModel}
                required
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={model.open_on_weekends ? 'active' : ''}
                  onClick={() => setModel({ ...model, open_on_weekends: true })}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!model.open_on_weekends ? 'active' : ''}
                  onClick={() =>
                    setModel({ ...model, open_on_weekends: false })
                  }
                >
                  Não
                </button>
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
