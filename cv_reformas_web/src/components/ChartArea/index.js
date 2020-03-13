import React from 'react';

import { Container, ChartCard } from './styles';

import RingLoading from '~/components/RingLoading';

export default function ChartArea() {
  return (
    <Container>
      <ChartCard>
        <RingLoading
          radius={100}
          stroke={10}
          progress={Math.random() * 100}
          color="#24B498"
        />
      </ChartCard>
      <ChartCard>
        <RingLoading
          radius={100}
          stroke={10}
          progress={Math.random() * 100}
          color="#B42493"
        />
      </ChartCard>
    </Container>
  );
}
