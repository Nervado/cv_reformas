import React, { Component } from 'react';

import { StyledPicker } from './styles';

export default class CustomInput extends Component {
  CustomInput = ({ value, onClick }) => (
    <StyledPicker className="custom-input" onClick={onClick}>
      {value}
    </StyledPicker>
  );

  render() {
    return <CustomInput />;
  }
}
