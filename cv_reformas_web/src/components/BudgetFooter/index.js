import React from 'react';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Button from '~/components/Button';

import { Container } from './styles';

export default function BudgetFooter({
  setFieldsProgress,
  fieldsProgress,
  logged,
}) {
  const route = logged ? '/dashboard' : '/budgets';

  return (
    <Container logged={logged && !fieldsProgress}>
      <div>
        <NavLink
          className="button-back"
          to={() => (fieldsProgress ? route : '/')}
        >
          <Button
            onClick={() => setFieldsProgress(false)}
            type="submit"
            text={fieldsProgress ? 'Voltar' : 'Inicio'}
          />
        </NavLink>

        <Button
          onClick={() => setFieldsProgress(true)}
          primary
          type="submit"
          text={fieldsProgress ? 'Enviar' : 'Continuar'}
        />
      </div>
    </Container>
  );
}

BudgetFooter.propTypes = {
  setFieldsProgress: PropTypes.func,
  fieldsProgress: PropTypes.bool,
  logged: PropTypes.bool,
};

BudgetFooter.defaultProps = {
  setFieldsProgress: null,
  fieldsProgress: false,
  logged: false,
};
