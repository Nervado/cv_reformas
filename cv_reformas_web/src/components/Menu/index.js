/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { setPageModeRequest } from '~/store/modules/page/actions';

import { Container, StyledNavLink } from './styles';

export default function Menu({ logged }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setPageModeRequest(true));
  }
  return (
    <Container>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/services">Serviços</StyledNavLink>
      {logged ? (
        <StyledNavLink logged={logged ? 1 : 0} to="/dashboard">
          Dashboard
        </StyledNavLink>
      ) : null}
      <StyledNavLink onClick={handleClick} to="/signup">
        Cadastre-se
      </StyledNavLink>
      <StyledNavLink to="/contact">Contato</StyledNavLink>
      <StyledNavLink to="/curriculum">Trabalhe conosco</StyledNavLink>
    </Container>
  );
}

Menu.propTypes = {
  logged: PropTypes.bool,
};

Menu.defaultProps = {
  logged: false,
};
