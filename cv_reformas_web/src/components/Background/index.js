import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Background({ logged, spaOn }) {
  return (
    <Container logged={logged ? 1 : 0} spaOn={spaOn ? 1 : 0}>
      <img alt="" />
      <div>
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
  spaOn: PropTypes.bool,
};

Background.defaultProps = {
  logged: false,
  spaOn: false,
};
