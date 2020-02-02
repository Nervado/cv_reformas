import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { setPageModeRequest } from '~/store/modules/page/actions';

// import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import Menu from '~/components/Menu';

import { Container, Content } from './styles';

export default function Header() {
  // const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setPageModeRequest(true));
  }

  function handleHome() {
    dispatch(setPageModeRequest(false));
  }
  return (
    <Container>
      <Content>
        <NavLink onClick={handleHome} to="/">
          <img src={logo} alt="logo" width="163px" height="134px" />
        </NavLink>

        <nav>
          <div>
            <div>
              <NavLink onClick={handleClick} to="/budgets">
                <button type="button">Orçamento</button>
              </NavLink>

              <button type="button">Login</button>
            </div>
            <Menu />
          </div>
        </nav>
      </Content>
    </Container>
  );
}
