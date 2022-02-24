import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Appli from './Appli';
import Content from './Content';
import Codex from './Codex';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <Appli />
    <Content />
    <Codex />
    <Footer />
  </React.StrictMode>,
  document.getElementById('racine')
);
