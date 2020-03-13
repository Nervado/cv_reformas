/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Container, Content } from './styles';

export default function RingLoading({ radius, stroke, progress, color }) {
  const [normalizedRadius] = useState(radius - stroke * 2);
  const [circumference] = useState(normalizedRadius * 2 * Math.PI);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <Container color={color}>
      <h1>Projetos Concluídos</h1>
      <Content
        height={`${radius * 2 + radius / 3}px`}
        width={`${radius * 2 + radius / 3}px`}
        color={color}
      >
        <svg className="progress-ring" height={radius * 2} width={radius * 2}>
          <circle
            className="progress-ring__circle"
            stroke={`${color}`}
            fill="transparent"
            strokeWidth={20}
            strokeDasharray={(circumference, circumference)}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>

        <div className="progress">{`${progress.toFixed(1)}%`}</div>
      </Content>
    </Container>
  );
}
