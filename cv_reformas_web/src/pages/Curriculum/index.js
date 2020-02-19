import React from 'react';

import GlobalStyle from '~/styles/global';

import { Container } from './styles';

import CurriculumForm from '~/components/CurriculumForm';
import Footer from '~/components/Footer';

export default function Curriculum() {
  return (
    <Container>
      <GlobalStyle formOn />
      <CurriculumForm />
      <Footer />
    </Container>
  );
}
