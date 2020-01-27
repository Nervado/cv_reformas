import React from 'react';

import { Container, Content, Text } from './styles';

import MiniAvatarRound from '~/components/MiniAvatarRound';

import Score from '~/components/Score';

export default function ShortProfile() {
  return (
    <Container>
      <Content>
        <MiniAvatarRound />
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
