import React from 'react';
// import { NavLink } from 'react-router-dom';

import { Container, StyledNavLink } from './styles';

export default function Menu() {
  return (
    <Container>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/services">Serviços</StyledNavLink>
      <StyledNavLink to="/">Cadastre-se</StyledNavLink>
      <StyledNavLink to="/">Contato</StyledNavLink>
      <StyledNavLink to="/professionals">Profissionais</StyledNavLink>
      <StyledNavLink to="/">Trabalhe conosco</StyledNavLink>
    </Container>
  );
}
