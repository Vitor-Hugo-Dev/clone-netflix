import React from 'react';
import './Footer.css';

const Footer = () => (
  <div>
    <footer className="footer">
      Feito com amor
      {' '}
      <span role="img" aria-label="coração">
        💙
      </span>
      {' '}
      por Vitor Hugo com apoio da plataforma B7web
      <br />
      Direitos de imagem para Netflix
      <br />
      Dados pegos no site Themoviedb.org
    </footer>
  </div>
);

export default Footer;
