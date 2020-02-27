/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { FormContext, useForm } from 'react-hook-form';

import { Container, Input, InputArea } from './styles';

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
    return data;
  };

  return (
    <FormContext>
      <Container onSubmit={handleSubmit(onSubmit)}>
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
            placeholder="Seu cpf"
            name="phoneNumber"
          />

          <Input
            ref={register}
            shk={1}
            grow={1}
            width="250px"
            name="streetName"
            placeholder="Nome da rua"
          />
        </InputArea>
        <button type="submit">Enviar</button>
      </Container>
    </FormContext>
  );
}
