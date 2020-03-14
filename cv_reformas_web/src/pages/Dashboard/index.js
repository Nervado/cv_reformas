/* eslint-disable no-console */
import React, { useState } from 'react';
import { FaCoins, FaBook, FaUsers } from 'react-icons/fa';

import { FiFilePlus } from 'react-icons/fi';

import {
  MdRecordVoiceOver,
  MdHistory,
  MdPerson,
  MdTimer,
} from 'react-icons/md';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import BudgetList from '~/components/BudgetList';
import NewBudget from '~/components/NewBudget';
import Ticket from '~/components/Ticket';
import BudgetView from '~/components/BudgetView';
import Galery from '~/components/Galery';
import TicketList from '~/components/TicketList';
import Profile from '~/components/Profile';

import ProfessionalsList from '~/components/ProfessionalsList';
import EvaluationsList from '~/components/EvaluationsList';
import TicketView from '~/components/TicketView';
import DashboardFrame from '~/components/DashboardFrame';

import EvaluationView from '~/components/EvaluationView';

// import RingLoading from '~/components/RingLoading';
import ChartArea from '~/components/ChartArea';

import { Container, Content, AsideMenu, BodyContent, Avatar } from './styles';

// import Search from '~/components/Search';

const data = [
  {
    teamCount: 4, // budgetView
    goal: 10, // Hours to respond
    status: 'Atrasado', // Em tempo ou atrasado
    value: 3200.01, // Valor atual do orçamento, pode ser revisado até virar projeto
  },
  {
    teamCount: 4, // projectView
    goal: 10, // days to end
    status: 'Atrasado', // Em tempo ou atrasado
    value: 3200.01, // Valor atual do projeto, pode ser revisto se acordado com o cliente
  },

  {
    pending: 4, // pending
    budgetCounts: 10,
    projectCounts: 100,
    effective: 34,
  },
  {
    clients: 4, // general
    budgets: 10,
    projects: 7,
    value: 32000.0891,
  },
];

const tickets = [
  {
    id: 1,
    title: 'Pedreiro fumando em casa',
    theme: 'Execução',
    projectId: 'Reforma da cozinha',
    description:
      'A reforma está muito devagar, o pedreiro chega todo dia atrasado, trabalha menos de 5 horas e vai embora, na segunda nao vem pois sempre esta passando mal de ressaca. Além de tudo, pede adiantamento toda sexta-feira.',
    date: '04 de maio de 2019',
    status: 'pendente',
    ended: false,
  },
  {
    id: 2,
    title: 'Pedreiro fumando em casa',
    theme: 'Execução',
    projectId: 'Reforma da cozinha',
    description: 'Reforma está devagar',
    date: '04 de maio de 2019',
    status: 'pendente',
    ended: true,
  },
  {
    id: 3,
    title: 'Pedreiro fumando em casa',
    theme: 'Execução',
    projectId: 'Reforma da cozinha',
    description: 'Reforma está devagar',
    date: '04 de maio de 2019',
    status: 'pendente',
    ended: true,
  },
  {
    id: 4,
    title: 'Pedreiro fumando em casa',
    theme: 'Execução',
    projectId: 'Reforma da cozinha',
    description: 'Reforma está devagar',
    date: '04 de maio de 2019',
    status: 'pendente',
    ended: false,
  },
  {
    id: 5,
    title: 'Pedreiro fumando em casa',
    theme: 'Execução',
    projectId: 'Reforma da cozinha',
    description: 'Reforma está devagar',
    date: '04 de maio de 2019',
    status: 'pendente',
    ended: true,
  },
];

const budgets = [
  {
    id: 1,
    description:
      'Armario para sala de aumentando lorem lorem ipslum bla bla bla bla jantar com 3 portas e tampo de vidro para servir de aparador testedjdjjdjdj ajajsnc lorem lorem  teste',
    date: '02 de abril de 2020',
    adress: 'Rua 24 de Maio, 99, apt 603, Rocha, Rio de Janeiro, CEP: 20950085',
    budget: '2000',
    accept: false,
    finished: true,
    finishedDate: '4 de maio de 2020',
    name: 'Joao',
    surname: 'da Silva',
    category: 'Moveis Planejados',
    desiribleDate: '7 dias',
    sended: false,
    phoneNumber: '21 972857728',
    email: 'joao@joao.com.br',
    numberOfFloors: 1,
    numberOfRooms: 3,
    hight: '2 m',
    width: '3 m',
    deepness: '4 m',
    numberOflights: 10,
    numberOfWalls: 6,
    numberOfDoors: 4,
    numberOfWindows: 8,
    photos: [
      { id: 1, url: 'https://picsum.photos/200' },
      { id: 2, url: 'https://picsum.photos/200' },
      { id: 3, url: 'https://picsum.photos/200' },
      { id: 4, url: 'https://picsum.photos/200' },
      { id: 5, url: 'https://picsum.photos/200' },
      { id: 6, url: 'https://picsum.photos/200' },
    ],
    team: [
      { name: 'Jose the Rock', skill: 'Eletricista' },
      { name: 'Olavo de Carvalho', skill: 'Pseudo Filosofo' },
      { name: 'Bolsonaro Malucão', skill: 'Falastrão' },
    ],
  },
  {
    id: 2,
    description:
      'Armario para sala de jantar com 3 portas e tampo de vidro para servir de aparador testedjdjjdjdj ajajsnc lorem lorem  teste',
    date: '02 de abril de 2020',
    adress: 'Rua 24 de Maio, 99, apt 603, Rocha, Rio de Janeiro, CEP: 20950085',
    budget: '2000',
    accept: false,
    finished: true,
    finishedDate: '4 de maio de 2020',
    name: 'Joao',
    surname: 'da Silva',
    category: 'Moveis Planejados',
    desiribleDate: '7 dias',
    sended: false,
    phoneNumber: '21 972857728',
    email: 'joao@joao.com.br',
    numberOfFloors: 1,
    numberOfRooms: 3,
    hight: '2 m',
    width: '3 m',
    deepness: '4 m',
    numberOflights: 10,
    numberOfWalls: 6,
    numberOfDoors: 4,
    numberOfWindows: 8,
    photos: [{ id: 1, url: 'https://picsum.photos/200' }],
    team: [
      { name: 'Jose the Rock', skill: 'Eletricista' },
      { name: 'Olavo de Carvalho', skill: 'Pseudo Filosofo' },
      { name: 'Bolsonaro Malucão', skill: 'Falastrão' },
    ],
  },
  {
    id: 3,
    description:
      'Armario para sala de jantar com 3 portas e tampo de vidro para servir de aparador testedjdjjdjdj ajajsnc lorem lorem  teste',
    date: '02 de abril de 2020',
    adress: 'Rua 24 de Maio, 99, apt 603, Rocha, Rio de Janeiro, CEP: 20950085',
    budget: '2000',
    accept: false,
    finished: true,
    finishedDate: '4 de maio de 2020',
    name: 'Joao',
    surname: 'da Silva',
    category: 'Moveis Planejados',
    desiribleDate: '7 dias',
    sended: false,
    phoneNumber: '21 972857728',
    email: 'joao@joao.com.br',
    numberOfFloors: 1,
    numberOfRooms: 3,
    hight: '2 m',
    width: '3 m',
    deepness: '4 m',
    numberOflights: 10,
    numberOfWalls: 6,
    numberOfDoors: 4,
    numberOfWindows: 8,
    photos: [],
    team: [
      { name: 'Jose the Rock', skill: 'Eletricista' },
      { name: 'Olavo de Carvalho', skill: 'Pseudo Filosofo' },
      { name: 'Bolsonaro Malucão', skill: 'Falastrão' },
    ],
  },
  {
    id: 4,
    description:
      'Armario para sala de jantar com 3 portas e tampo de vidro para servir de aparador testedjdjjdjdj ajajsnc lorem lorem  teste',
    date: '02 de abril de 2020',
    adress: 'Rua 24 de Maio, 99, apt 603, Rocha, Rio de Janeiro, CEP: 20950085',
    budget: '2000',
    accept: false,
    finished: true,
    finishedDate: '4 de maio de 2020',
    name: 'Joao',
    surname: 'da Silva',
    category: 'Moveis Planejados',
    desiribleDate: '7 dias',
    sended: false,
    phoneNumber: '21 972857728',
    email: 'joao@joao.com.br',
    numberOfFloors: 1,
    numberOfRooms: 3,
    hight: '2 m',
    width: '3 m',
    deepness: '4 m',
    numberOflights: 10,
    numberOfWalls: 6,
    numberOfDoors: 4,
    numberOfWindows: 8,
    photos: [],
    team: [
      { name: 'Jose the Rock', skill: 'Eletricista' },
      { name: 'Olavo de Carvalho', skill: 'Pseudo Filosofo' },
      { name: 'Bolsonaro Malucão', skill: 'Falastrão' },
    ],
  },
  {
    id: 5,
    description:
      'Armario para sala de jantar com 3 portas e tampo de vidro para servir de aparador testedjdjjdjdj ajajsnc lorem lorem  teste',
    date: '02 de abril de 2020',
    adress: 'Rua 24 de Maio, 99, apt 603, Rocha, Rio de Janeiro, CEP: 20950085',
    budget: '2000',
    accept: false,
    finished: true,
    finishedDate: '4 de maio de 2020',
    name: 'Joao',
    surname: 'da Silva',
    category: 'Moveis Planejados',
    desiribleDate: '7 dias',
    sended: false,
    phoneNumber: '21 972857728',
    email: 'joao@joao.com.br',
    numberOfFloors: 1,
    numberOfRooms: 3,
    hight: '2 m',
    width: '3 m',
    deepness: '4 m',
    numberOflights: 10,
    numberOfWalls: 6,
    numberOfDoors: 4,
    numberOfWindows: 8,
    photos: [],
    team: [
      { name: 'Jose the Rock', skill: 'Eletricista' },
      { name: 'Olavo de Carvalho', skill: 'Pseudo Filosofo' },
      { name: 'Bolsonaro Malucão', skill: 'Falastrão' },
    ],
  },
];

export default function Dashboard() {
  const admin = true;
  function handleDeletePhotos(id) {
    console.log(`photo ${id} deletada do banco de dados`);
    return id;
  }

  function handleAccept(id) {
    console.log(`Orcamento ${id} aprovado`);
  }

  const [child, setChild] = useState(
    <DashboardFrame data={data[3]} type="general">
      <ChartArea />
    </DashboardFrame>,
  );

  function handleNewBudget() {
    setChild(<NewBudget />);
  }

  function handleGetBudgets() {
    function handleView(budget) {
      function getGalery() {
        console.log(budget);
        setChild(
          <Galery
            budget={budget}
            onDelete={handleDeletePhotos}
            handleBack={handleView}
          />,
        );
      }
      setChild(
        <BudgetView
          budget={budget}
          onClick={handleGetBudgets}
          getGalery={getGalery}
        />,
      );
    }

    setChild(
      <BudgetList
        budgets={budgets}
        handleAccept={handleAccept}
        handleView={handleView}
      />,
    );
  }

  function handleGetFineshed() {
    setChild(<BudgetList budgets={budgets} />);
  }

  function handleNewTicket() {
    setChild(<Ticket />);
  }

  function getTickets() {
    setChild(
      <TicketList
        tickets={tickets}
        handleView={ticket => {
          setChild(<TicketView ticket={ticket} onClick={getTickets} />);
        }}
        handleEdit={ticket => {
          setChild(<Ticket ticket={ticket} />);
        }}
        handleDelete={() => {}}
      />,
    );
  }

  function getProfile() {
    setChild(<Profile />);
  }
  return (
    <Container>
      <Header />
      <Content>
        <AsideMenu className="dashboard-menu" admin={admin}>
          <div className="dashboard-avatar">
            <Avatar>
              <img
                src="https://api.adorable.io/avatars/70/abott@adorable.png"
                alt="avatar"
              />
            </Avatar>
            <div className="dashboard-greet">
              <span className="dashboard-msg">Boa tarde!</span>
              <span className="dashboard-username">Evandro</span>
            </div>
          </div>
          <div className="dashboard-buttons">
            <button type="button" onClick={handleGetBudgets}>
              <FaCoins className="icon" />
              <span>Orçamentos</span>
            </button>
            <button type="button" onClick={handleNewBudget}>
              <FiFilePlus className="icon" />
              <span>Solicitar novo</span>
            </button>
            <button type="button" onClick={handleGetFineshed}>
              <FaBook className="icon" />
              <span>Concluídos</span>
            </button>
            <button type="button" onClick={handleNewTicket}>
              <MdRecordVoiceOver className="icon" />
              <span> Novo chamado</span>
            </button>
            <button type="button" onClick={getTickets}>
              <MdHistory className="icon" />
              <span>Seus chamados</span>
            </button>
            <button
              type="button"
              onClick={() =>
                setChild(
                  <DashboardFrame type="pending" data={data[2]}>
                    <BudgetList
                      budgets={budgets}
                      handleAccept={handleAccept}
                      handleView={budget => <BudgetView budget={budget} />}
                    />
                  </DashboardFrame>,
                )
              }
            >
              <MdTimer className="icon" />
              <span>Pendentes</span>
            </button>
            <button type="button" onClick={getProfile}>
              <MdPerson className="icon" />
              <span>Seus dados</span>
            </button>
            <button
              type="button"
              onClick={() => setChild(<ProfessionalsList />)}
            >
              <FaUsers className="icon" />
              <span>Profissionais</span>
            </button>
            <button
              type="button"
              onClick={() =>
                setChild(
                  <EvaluationsList
                    onClick={() =>
                      setChild(
                        <DashboardFrame type="budgetView" data={data[0]}>
                          <EvaluationView
                            team={[
                              {
                                id: 1,
                                job: 'Eletricista',
                                name: 'José do Patrocinio',
                                ratting: 0,
                              },
                              {
                                id: 22,
                                job: 'Engenheiro',
                                name: 'João da Perimetral',
                                ratting: 0,
                              },
                              {
                                id: 49,
                                job: 'Pedreiro',
                                name: 'Paulo Pedregoso',
                                ratting: 0,
                              },
                              {
                                id: 48,
                                job: 'Pedreiro',
                                name: 'Pedrosa Pedregulho',
                                ratting: 0,
                              },
                              {
                                id: 47,
                                job: 'Pedreiro',
                                name: 'Lucas Negão',
                                ratting: 0,
                              },
                            ]}
                            project={{
                              id: 1,
                              title:
                                'Reforma da suite  com instalação de banheira ',
                            }}
                            goBack={() => setChild(<EvaluationsList />)}
                          />
                        </DashboardFrame>,
                      )
                    }
                  />,
                )
              }
            >
              <MdPerson className="icon" />
              <span>Avaliações</span>
            </button>
            <button type="button" onClick={() => {}}>
              <MdPerson className="icon" />
              <span>Geral</span>
            </button>
          </div>
        </AsideMenu>
        <BodyContent>{child}</BodyContent>
      </Content>
      <Footer />
    </Container>
  );
}
