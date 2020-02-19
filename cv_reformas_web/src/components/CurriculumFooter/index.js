import React from 'react';

import { NavLink } from 'react-router-dom';

import Button from '~/components/Button';

import { Container } from './styles';

export default function CurriculumFooter() {
  return (
    <Container>
      <div>
        <NavLink to="/">
          <Button type="button" text="Inicio" />
        </NavLink>

        <Button primary type="submit" text="Enviar" />
      </div>
    </Container>
  );
}
