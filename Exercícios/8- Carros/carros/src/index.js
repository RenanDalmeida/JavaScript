import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Carros from "./pages/carros"
import * as serviceWorker from './serviceWorker';

//Renderiza os componentes no index.html
ReactDOM.render(
  <React.StrictMode>
    <Carros/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();