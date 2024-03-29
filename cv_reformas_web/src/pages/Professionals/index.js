import React from 'react';
import GlobalStyle from '~/styles/global';

import ProfessionalsList from '~/components/ProfessionalsList';
import EvaluationsList from '~/components/EvaluationsList';

import Footer from '~/components/Footer';
import { Container, Content, Title, Lists } from './styles';
import Header from '~/components/Header';

export default function Professionals() {
  return (
    <Container>
      <GlobalStyle spaOn />
      <Header />
      <Content>
        <Title>
          <h1>Profissionais</h1>
        </Title>
        <Lists>
          <EvaluationsList />
          <ProfessionalsList />
        </Lists>
      </Content>
      <Footer />
    </Container>
  );
}
