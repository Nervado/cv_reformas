import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ primary, text }) {
  return (
    <Container primary={primary ? 1 : 0}>
      <button type="button">{text}</button>
    </Container>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  text: PropTypes.string,
};

Button.defaultProps = {
  primary: false,
  text: ' ',
};
