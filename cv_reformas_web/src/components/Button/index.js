import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ onClick, primary, text }) {
  return (
    <Container primary={primary ? 1 : 0}>
      <button onClick={onClick} type="button">
        {text}
      </button>
    </Container>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  text: ' ',
  onClick: null,
};
