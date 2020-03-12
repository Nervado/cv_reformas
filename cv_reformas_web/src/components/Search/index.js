/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import {
  FaSearch,
  FaPlusCircle,
  FaMinusCircle,
  FaRegIdBadge,
  FaStar,
} from 'react-icons/fa';

import {
  Container,
  Content,
  SearchInput,
  SearchOutput,
  Footer,
  Body,
  Header,
  Icon,
  Team,
} from './styles';

const Add = <FaPlusCircle color="green" size={20} />;
const Sub = <FaMinusCircle color="#df7e38" size={20} />;
const Busy = <FaRegIdBadge color="#707070" size={20} />;
const Available = <FaRegIdBadge color="green" size={20} />;

const props = {
  id: (Math.random() * 10).toFixed(0),
  name: 'Joao',
  surname: 'Pedrosa da Silva',
  job: 'Eletricista',
  hired: false,
  busy: true,
  stars: 4.78,
};

function Props(
  name = 'Joao',
  surname = 'Pedrosa da Silva',
  job = 'Eletricista',
  hired = false,
  busy = true,
  stars = 4.78,
) {
  this.id = (Math.random() * 100).toFixed(0);
  this.name = name;
  this.surname = surname;
  this.job = job;
  this.hired = hired;
  this.busy = busy;
  this.stars = stars;
}

function SearchItem({
  id,
  name,
  surname,
  job,
  hired,
  busy,
  stars,
  handleHired,
}) {
  const [_hired, setHired] = useState(hired);

  const data = { id, name, surname, job, hired, busy, stars };

  function handleClick() {
    const isHired = _hired;
    setHired(!_hired);
    if (!isHired) {
      data.hired = true;
      handleHired(id, 'add', { ...data });
    } else {
      data.hired = false;
      handleHired(id, 'remove', { ...data });
    }
  }

  return (
    <div className="search-item">
      <div className="search-item-name">
        <span>{busy ? Busy : Available}</span>
        <span>
          {name} {surname},
        </span>
        <span>{job}</span>
      </div>

      <div className="action">
        <span>
          <FaStar color="#df7e38" size={20} />
        </span>
        <span>{stars.toFixed(1)}</span>
        <span>
          <Icon onClickCapture={handleClick}>{_hired ? Sub : Add}</Icon>
        </span>
      </div>
    </div>
  );
}

const _props = { ...props };

_props.busy = false;

const results = [
  new Props(),
  new Props(),
  new Props(),
  new Props(),
  new Props(),
  new Props(),
];

export default function Search({
  title = 'Projeto #456 - Associar membros de equipe',
}) {
  // use state in store
  const [hidden, setHidden] = useState(false);

  const [list, setList] = useState([]);

  const [loading, setLoading] = useState(false);

  const [team, setTeam] = useState([]);

  useEffect(() => {
    setList(results);
  }, []);

  function handleHired(id, action = 'add', data) {
    if (action === 'add') {
      setTeam([data, ...team]);

      const updatedList = list.filter(member => {
        if (member.id !== id) return member;
        return null;
      });

      setList([...updatedList]);
    }

    if (action === 'remove') {
      // add new hired professional
      setList([data, ...list]);
      const updatedTeam = team.filter(member => {
        if (member.id !== id) {
          return member;
        }

        return null;
      });

      setTeam([...updatedTeam]);
    }
  }

  return (
    <Container>
      <Content>
        <Header>{title}</Header>
        <Body>
          <SearchInput>
            <div className="search-area">
              <input
                name="search"
                type="text"
                onClick={() => setLoading(true)}
              />
            </div>
            <div className="icon-area">
              <FaSearch
                color="green"
                size={20}
                onClick={() => {
                  setLoading(!loading);
                }}
              />
            </div>
          </SearchInput>
          <SearchOutput hidden={hidden}>
            {loading ? (
              <div className="loading">
                <div className="lds-dual-ring" />
              </div>
            ) : (
              <div className="output ">
                {list.map(data => (
                  <SearchItem
                    {...data}
                    handleHired={handleHired}
                    key={data.id}
                  />
                ))}
              </div>
            )}
          </SearchOutput>
          <Team>
            {loading ? (
              <div className="loading">
                <div className="lds-dual-ring" />
              </div>
            ) : (
              <div className="output ">
                {team &&
                  team.map(data => (
                    <SearchItem
                      {...data}
                      handleHired={handleHired}
                      key={data.id}
                    />
                  ))}
              </div>
            )}
          </Team>
        </Body>
        <Footer>
          <button type="button" className="secondary">
            Voltar
          </button>
          <button type="submit">Salvar</button>
        </Footer>
      </Content>
    </Container>
  );
}
