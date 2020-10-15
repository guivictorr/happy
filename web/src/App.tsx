import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'leaflet/dist/leaflet.css';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
