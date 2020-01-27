import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

// import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import Menu from '~/components/Menu';

import { Container, Content } from './styles';

export default function Header({ spaOn }) {
  // const profile = useSelector(state => state.user.profile);
  return (
    <Container spaOn={spaOn ? 1 : 0}>
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

Header.propTypes = {
  spaOn: PropTypes.bool,
};

Header.defaultProps = {
  spaOn: false,
};
