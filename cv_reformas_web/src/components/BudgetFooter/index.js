import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '~/components/Button';
import { setPageModeRequest } from '~/store/modules/page/actions';

import { Container } from './styles';

export default function BudgetFooter() {
  const dispatch = useDispatch();
  function handleHome() {
    dispatch(setPageModeRequest(false));
  }
  return (
    <Container>
      <div>
        <NavLink onClick={handleHome} to="/">
          <Button text="Voltar" />
        </NavLink>

        <Button primary text="Enviar" />
      </div>
    </Container>
  );
}
