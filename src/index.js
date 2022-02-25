import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Appli from './Appli';
import Content from './Content';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <Appli />
    <Content />
    <Footer />
  </React.StrictMode>,
  document.getElementById('racine')
);
