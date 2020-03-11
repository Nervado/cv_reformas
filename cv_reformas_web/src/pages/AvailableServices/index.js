import React from 'react';
import GlobalStyle from '~/styles/global';

import Header from '~/components/Header';
import Caroulsel from '~/components/Caurosel';
import Footer from '~/components/Footer';

import { Container, Content, Title } from './styles';

export default function AvailableServices() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Content>
        <Title>
          <h1>Nossos Serviços</h1>
        </Title>
        <Caroulsel />
      </Content>
      <Footer />
    </Container>
  );
}
