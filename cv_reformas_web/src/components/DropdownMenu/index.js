/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';

import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { Container, Header, Title, List, StyledButton } from './styles';

export default function DropdownMenu({ list, onChange, placeholder }) {
  const [selected, setSelected] = useState('');
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Header>
        <Title onClick={() => setVisible(!visible)} selected={selected}>
          <span>{selected.length ? selected : placeholder}</span>
          <span style={{ color: '#df7e38' }}>
            {visible ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </Title>
      </Header>
      <List visible={visible} onMouseLeave={() => setVisible(false)}>
        {list.map(item => {
          return (
            <li key={item}>
              <StyledButton
                type="StyledButton"
                onClick={() => {
                  setSelected(item);
                  setVisible(false);
                  onChange(item);
                }}
              >
                {item}
              </StyledButton>
            </li>
          );
        })}
      </List>
    </Container>
  );
}

DropdownMenu.propTypes = {
  list: PropTypes.array,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

DropdownMenu.defaultProps = {
  list: [],
  onChange: null,
  placeholder: 'Selecione uma categoria',
};
