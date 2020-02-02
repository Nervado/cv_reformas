import React from 'react';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setPageModeRequest } from '~/store/modules/page/actions';

import { Container } from './styles';
import logo from '~/assets/logo.svg';

import BudgetFields from '../BudgetFields';
import BudgetFooter from '../BudgetFooter';

export default function BudgetForm() {
  const dispatch = useDispatch();
  function handleHome() {
    dispatch(setPageModeRequest(false));
  }
  return (
    <Container>
      <NavLink onClick={handleHome} to="/">
        <img src={logo} alt="logo" width="163px" height="134px" />
      </NavLink>
      <BudgetFields />
      <BudgetFooter />
    </Container>
  );
}
