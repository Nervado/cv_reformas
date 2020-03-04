import React from 'react';

import { useDispatch } from 'react-redux';
import { setPageModeRequest } from '~/store/modules/page/actions';

import { Container, StyledNavLink } from './styles';

export default function Menu() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setPageModeRequest(true));
  }
  return (
    <Container>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/services">Serviços</StyledNavLink>
      <StyledNavLink onClick={handleClick} to="/signup">
        Cadastre-se
      </StyledNavLink>
      <StyledNavLink to="/contact">Contato</StyledNavLink>
      <StyledNavLink to="/curriculum">Trabalhe conosco</StyledNavLink>
    </Container>
  );
}

// <StyledNavLink to="/professionals">Profissionais</StyledNavLink>
