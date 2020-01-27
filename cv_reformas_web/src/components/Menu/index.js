import React from 'react';
// import { NavLink } from 'react-router-dom';

import { Container, StyledNavLink } from './styles';

export default function Menu() {
  return (
    <Container>
      <StyledNavLink to="/">Serviços</StyledNavLink>
      <StyledNavLink to="/professionals">Profissionais</StyledNavLink>
      <StyledNavLink to="/">Trabalhe conosco</StyledNavLink>
      <StyledNavLink to="/">Cadastre-se</StyledNavLink>
      <StyledNavLink to="/">Sobre</StyledNavLink>
      <StyledNavLink to="/">Contato</StyledNavLink>
    </Container>
  );
}
