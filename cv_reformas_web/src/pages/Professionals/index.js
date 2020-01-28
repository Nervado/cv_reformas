import React from 'react';
import GlobalStyle from '~/styles/global';

import ProfessionalsList from '~/components/ProfessionalsList';
import EvaluationsList from '~/components/EvaluationsList';

import Footer from '~/components/Footer';
import { Container, Content, Title, Lists } from './styles';

export default function Professionals() {
  return (
    <Container>
      <GlobalStyle spaOn />
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
