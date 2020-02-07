/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { useFormContext, Controller } from 'react-hook-form';

import SimpleDatePicker from '~/components/SimpleDatePicker';

import { Container, Input, TextArea, InputArea } from './styles';
import DropdownMenu from '../DropdownMenu';

export default function BudgetFields({ hidden }) {
  const { register, methods } = useFormContext();
  return (
    <Container hidden={hidden} {...methods}>
      <InputArea>
        <Input
          ref={register}
          shk={0}
          width="150px"
          name="name"
          placeholder="Seu nome"
        />
        <Input
          ref={register}
          shk={0}
          grow={1}
          width="300px"
          name="surname"
          placeholder="Seu sobrenome"
        />
        <Input
          ref={register}
          shk={0}
          grow={1}
          width="300px"
          name="email"
          placeholder="Seu email"
        />
        <Input
          ref={register}
          shk={0}
          width="200px"
          placeholder="Seu telefone"
          name="phoneNumber"
        />
      </InputArea>
      <TextArea>
        <textarea
          ref={register}
          name="description"
          id="1"
          cols="30"
          rows="10"
          placeholder=" Descreva aqui seu desejo..."
        />
      </TextArea>
      <InputArea>
        <Controller
          as={<DropdownMenu />}
          name="category"
          onChange={selected => {
            return selected;
          }}
          defaultValue=""
          className="dropdown"
          width={150}
          shk={1}
          grow={0}
          list={[
            'Iluminação',
            'Móveis Planejados',
            'Reforma',
            'Projeto',
            'Rebaixamento de Gesso',
          ]}
        />
        <Controller
          name="date"
          as={<SimpleDatePicker />}
          onChange={date => {
            return date;
          }}
          defaultValue=""
          width={150}
          shk={1}
          grow={0}
          placeholderText="Para quando você quer?"
        />
      </InputArea>
    </Container>
  );
}

BudgetFields.propTypes = {
  hidden: PropTypes.bool,
  setDate: PropTypes.func,
  date: PropTypes.any,
};

BudgetFields.defaultProps = {
  hidden: true,
  setDate: null,
  date: {},
};
