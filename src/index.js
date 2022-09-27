import React from 'react';
import ReactDOM from 'react-dom/client';

import {Yulieth} from './Componente/Yulieth.js';
import {Menu} from './Menu/Menu.js';
import {Banner} from './Banner/Banner.js';
import { Sinopsis } from './Sinopsis/Sinopsis.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>
    <Banner/>
    <Sinopsis/>
  </React.StrictMode>
);