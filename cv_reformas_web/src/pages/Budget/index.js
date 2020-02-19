import React from 'react';

import GlobalStyle from '~/styles/global';

import { Container } from './styles';

import BudgetForm from '~/components/BudgetForm';
import Footer from '~/components/Footer';

export default function Budget() {
  return (
    <Container>
      <GlobalStyle formOn />
      <BudgetForm />
      <Footer />
    </Container>
  );
}
