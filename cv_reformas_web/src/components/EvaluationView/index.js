/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaStar, FaUser, FaCoins, FaUsers, FaTrash } from 'react-icons/fa';
import { MdTimer, MdSend } from 'react-icons/md';

import { GiLifeBar } from 'react-icons/gi';

import { rgba } from 'polished';
import { Container, Content, Header, Body, Footer } from './styles';

import ScoreStarry from '../ScoreStarry';

const color = 'green';

const icons = [
  { icon: <GiLifeBar color={color} />, topic: 'Qualidade do serviço' },
  { icon: <FaCoins color={color} />, topic: 'Preço' },
  { icon: <MdTimer color={color} />, topic: 'Prazo' },
  { icon: <FaUsers color={color} />, topic: 'Suporte' },
];

const _ratting = {
  projectId: 1,
  team: [
    { id: 1, ratting: 2.1 },
    { id: 1, ratting: 4.6 },
    { id: 1, ratting: 4.4 },
    { id: 1, ratting: 4.99 },
    { id: 1, ratting: 4.9 },
  ],
  topics: {
    general: 4,
    price: 4,
    goal: 5,
    quality: 4,
  },
  overall: 1,
  opinion: 'Bla bla bla bla bla bla bla bla bla',
};

const _rattingTeam = [
  { id: 1, ratting: 2.1 },
  { id: 2, ratting: 4.6 },
  { id: 3, ratting: 4.4 },
  { id: 4, ratting: 4.99 },
  { id: 5, ratting: 4.9 },
];

export default function EvaluationView({ team, project }) {
  const [ratting, setRatting] = useState(_ratting);
  const [rattingTeam, setRattingTeam] = useState(_rattingTeam);

  function handleHover(id, rating) {
    // let index = 0;
    const search = rattingTeam.map(item => {
      if (item.id === id) {
        // index = i;
        item.ratting = rating;
      }

      return item;
    });

    // search[index].ratting = rating;

    setRattingTeam([...search]);

    console.log([...search]);
  }

  return (
    <Container>
      <Content>
        <Header>
          <div className="header-wrapper">
            <div className="title">
              <span>
                Projeto #{`${project.id}`}: {project.title}
              </span>
            </div>
            <div className="score">
              <span>
                <FaStar />
              </span>
              <span>{ratting.overall}</span>
            </div>
          </div>
        </Header>

        <Body>
          <div className="rattings">
            {team.map((member, i) => (
              <div className="team" key={member.name}>
                <div>
                  <span className="icon">
                    <FaUser color="green" />
                  </span>
                  <span>
                    {member.job}, {member.name}
                  </span>
                </div>
                <div className="starry">
                  <ScoreStarry
                    hide
                    rating={rattingTeam[i].ratting}
                    className="starry-score"
                    handleHover={handleHover}
                    id={rattingTeam[i].id}
                  />
                </div>
              </div>
            ))}
            {icons.map(topic => (
              <div className="ratting" key={topic.topic}>
                <div className="rat">
                  <span className="icon">{topic.icon}</span>
                  <span> {topic.topic}</span>
                </div>
                <div className="starry">
                  <ScoreStarry hide />
                </div>
              </div>
            ))}
          </div>

          <div className="text-area-wrapper">
            <span className="label">Sua Opinião geral:</span>
            <textarea name="opinion" id="opinion" cols="30" rows="10" />
          </div>
        </Body>

        <Footer>
          <div>
            <button type="button">
              <MdSend className="icon" />
              Enviar
            </button>
            <button type="button">
              <FaTrash className="icon" color={rgba(0, 0, 0, 0.6)} /> Limpar
            </button>
          </div>
        </Footer>
      </Content>
    </Container>
  );
}
