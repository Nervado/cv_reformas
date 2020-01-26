import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Background({ logged = false }) {
  return (
    <Container>
      <img alt="background" />
      <div logged={logged ? 1 : 0}>
        <div>
          <h1>
            Onde seus sonhos tornam-se <span>realidade!</span>
          </h1>
          <br />
          <h2>
            Clique aqui para um orçamento <span>Grátis!</span>
          </h2>
        </div>
      </div>
    </Container>
  );
}

Background.propTypes = {
  logged: PropTypes.bool,
};

Background.defaultProps = {
  logged: false,
};
