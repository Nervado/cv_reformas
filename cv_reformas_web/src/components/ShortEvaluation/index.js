import React from 'react';

import { Container, Content, Text } from './styles';

import MiniAvatar from '~/components/MiniAvatar';

import Score from '~/components/Score';

export default function ShortEvaluation() {
  return (
    <Container>
      <Content>
        <MiniAvatar />
        <Text>
          <span>
            {' '}
            “Foi uma experiência incrível usar os serviços da C&V Reformas”
          </span>
        </Text>
        <Score />
      </Content>
    </Container>
  );
}
