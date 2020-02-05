import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Button from '~/components/Button';

import { Container } from './styles';

export default function BudgetFooter({ setFieldsProgress, fieldsProgress }) {
  return (
    <Container>
      <div>
        <NavLink to={() => (fieldsProgress ? '/budgets' : '/')}>
          <Button onClick={() => setFieldsProgress(false)} text="Voltar" />
        </NavLink>

        <Button
          onClick={() => setFieldsProgress(true)}
          primary
          text="Continuar"
        />
      </div>
    </Container>
  );
}

BudgetFooter.propTypes = {
  setFieldsProgress: PropTypes.func,
  fieldsProgress: PropTypes.bool,
};

BudgetFooter.defaultProps = {
  setFieldsProgress: null,
  fieldsProgress: false,
};
