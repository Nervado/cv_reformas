import React from 'react';
// import { useSelector } from 'react-redux';

// import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import Menu from '~/components/Menu';

import { Container, Content } from './styles';

export default function Header() {
  // const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" width="163px" height="134px" />
        <nav>
          <div>
            <div>
              <button type="button">Orçamento</button>
              <button type="button">Login</button>
            </div>
            <Menu />
          </div>
        </nav>
      </Content>
    </Container>
  );
}
