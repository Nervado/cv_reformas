import React from 'react';

import SimpleDatePicker from '~/components/SimpleDatePicker';

import { Container, Input, TextArea, InputArea } from './styles';
import DropdownMenu from '../DropdownMenu';

export default function BudgetFields() {
  return (
    <Container>
      <InputArea>
        <Input shk={0} width="150px" type="text" placeholder="Seu nome" />
        <Input
          shk={0}
          grow={1}
          width="300px"
          type="text"
          placeholder="Seu sobrenome"
        />
        <Input
          shk={0}
          grow={1}
          width="300px"
          type="text"
          placeholder="Seu email"
        />
        <Input shk={0} width="200px" type="text" placeholder="Seu telefone" />
      </InputArea>
      <TextArea>
        <textarea
          name="description"
          id="1"
          cols="30"
          rows="10"
          placeholder=" Descreva aqui seu desejo..."
        />
      </TextArea>
      <InputArea>
        <DropdownMenu
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
        <SimpleDatePicker
          width={150}
          shk={1}
          grow={0}
          name="date"
          placeholderText="Para quando você quer?"
        />
      </InputArea>
    </Container>
  );
}
