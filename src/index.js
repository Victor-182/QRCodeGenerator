import React from 'react';
import ReactDOM from 'react-dom';

import QRCodeGenerator from './components/QRCodeGenerator'
import Botoes from './components/Botoes'

import './style/index.css'

ReactDOM.render(
  <div class="container">
    <QRCodeGenerator url="google.com"/>
    <Botoes />
  </div>
  ,
  document.getElementById('root')
);
