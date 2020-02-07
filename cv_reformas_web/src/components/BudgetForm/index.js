/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';
import logo from '~/assets/logo.svg';

import BudgetFields from '../BudgetFields';
import BudgetDetails from '../BudgetDetails';
import BudgetFooter from '../BudgetFooter';

export default function BudgetForm() {
  const methods = useForm();

  const onSubmit = data => {
    return data;
  };

  const [fieldsProgress, setFieldsProgress] = useState(false);

  return (
    <FormContext {...methods}>
      <Container onSubmit={methods.handleSubmit(onSubmit)}>
        <NavLink to="/">
          <img src={logo} alt="logo" width="163px" height="134px" />
        </NavLink>
        <BudgetFields hidden={fieldsProgress} />
        <BudgetDetails hidden={!fieldsProgress} />
        <BudgetFooter
          setFieldsProgress={setFieldsProgress}
          fieldsProgress={fieldsProgress}
        />
      </Container>
    </FormContext>
  );
}
