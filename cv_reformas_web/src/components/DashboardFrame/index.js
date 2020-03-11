/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react';
import { MdTimer, MdPerson } from 'react-icons/md';

import { FaUsers, FaCalendar, FaInfoCircle, FaCoins } from 'react-icons/fa';

import DashboardHeader from '~/components/DashboardHeader';

import { Container } from './styles';

const size = 22;

const icons = [
  <FaUsers color="#de2929" size={size} />,
  <MdTimer color="#3b99c3" size={size} />,
  <FaInfoCircle color="#DDDD51" size={size} />,
  <FaCoins color="#24B498" size={size} />,
  <FaUsers />,
  <FaCalendar />,
  <FaInfoCircle />,
  <MdPerson />,
];

export default function DashboardFrame({ children, type, data }) {
  function selectType() {
    switch (type) {
      case 'budgetView':
        return (
          <DashboardHeader
            icons={[icons[0], icons[1], icons[2], icons[3]]}
            data={[
              `${data.teamCount}`,
              `${data.goal} h`,
              `${data.status}`,
              `R$ ${data.value}`,
            ]}
            names={['Equipe', 'Prazo', 'Situação', 'Valor']}
            unreadCount={[4, 1, 4, 7]}
            hasUnread={[1, 0, 1, 1]}
          />
        );

      case 'projectView':
        return (
          <DashboardHeader
            icons={[icons[0], icons[1], icons[2], icons[3]]}
            data={[
              `${data.teamCount}`,
              `${data.goal} h`,
              `${data.status}`,
              `R$ ${data.value}`,
            ]}
            names={['Equipe', 'Prazo', 'Situação', 'Valor']}
            unreadCount={[4, 1, 4, 7]}
            hasUnread={[1, 0, 1, 1]}
          />
        );
      case 'pending':
        return (
          <DashboardHeader
            icons={[icons[0], icons[1], icons[2], icons[3]]}
            data={[
              `${data.teamCount}`,
              `${data.goal} h`,
              `${data.status}`,
              `R$ ${data.value}`,
            ]}
            names={['Equipe', 'Prazo', 'Situação', 'Valor']}
            unreadCount={[4, 1, 4, 7]}
            hasUnread={[1, 0, 1, 1]}
          />
        );
      case 'general':
        return (
          <DashboardHeader
            icons={[icons[0], icons[1], icons[2], icons[3]]}
            data={[
              `${data.teamCount}`,
              `${data.goal} h`,
              `${data.status}`,
              `R$ ${data.value}`,
            ]}
            names={['Equipe', 'Prazo', 'Situação', 'Valor']}
            unreadCount={[4, 1, 4, 7]}
            hasUnread={[1, 0, 1, 1]}
          />
        );
      default:
        return (
          <DashboardHeader
            icons={[icons[0], icons[1], icons[2], icons[3]]}
            data={[`${data.teamCount}`, 'Prazo', 'Situação', 'Valor']}
            names={['Equipe', 'Prazo', 'Situação', 'Valor']}
            unreadCount={[4, 1, 4, 7]}
            hasUnread={[1, 0, 1, 1]}
          />
        );
    }
  }

  const child = selectType();

  return (
    <Container>
      {child}
      {children}
    </Container>
  );
}
