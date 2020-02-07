import React from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ onClick, primary, text }) {
  const { register } = useFormContext();
  return (
    <Container primary={primary ? 1 : 0}>
      <button name={text} ref={register} onClick={onClick} type="submit">
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
