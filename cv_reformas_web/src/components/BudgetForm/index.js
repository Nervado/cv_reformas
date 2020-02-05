import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setPageModeRequest } from '~/store/modules/page/actions';

import { Container } from './styles';
import logo from '~/assets/logo.svg';

import BudgetFields from '../BudgetFields';
import BudgetDetails from '../BudgetDetails';
import BudgetFooter from '../BudgetFooter';

export default function BudgetForm() {
  const dispatch = useDispatch();

  const [fieldsProgress, setFieldsProgress] = useState(false);

  function handleHome() {
    dispatch(setPageModeRequest(false));
  }
  return (
    <Container>
      <NavLink onClick={handleHome} to="/">
        <img src={logo} alt="logo" width="163px" height="134px" />
      </NavLink>
      {fieldsProgress ? <BudgetDetails /> : <BudgetFields />}
      <BudgetFooter
        setFieldsProgress={setFieldsProgress}
        fieldsProgress={fieldsProgress}
      />
    </Container>
  );
}
