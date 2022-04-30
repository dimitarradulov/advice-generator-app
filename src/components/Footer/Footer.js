import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Footer.module.css';

const Footer = () => {
  return ReactDOM.createPortal(
    <footer className={classes.attribution}>
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href="https://github.com/dimitarradulov"
        target="_blank"
        rel="noreferrer"
      >
        Dimitar Radulov
      </a>
      .
    </footer>,
    document.getElementById('footer')
  );
};

export default Footer;
