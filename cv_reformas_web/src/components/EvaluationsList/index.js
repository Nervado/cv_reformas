import React from 'react';

import ShortEvaluation from '~/components/ShortEvaluation';

import { Container, Content, Title } from './styles';

export default function EvaluationsList() {
  return (
    <Container>
      <Content>
        <Title>Avaliações</Title>
        <ul>
          <ShortEvaluation />
          <ShortEvaluation />
          <ShortEvaluation />
          <ShortEvaluation />
          <ShortEvaluation />
          <ShortEvaluation />
          <ShortEvaluation />
          <ShortEvaluation />
        </ul>
      </Content>
    </Container>
  );
}
