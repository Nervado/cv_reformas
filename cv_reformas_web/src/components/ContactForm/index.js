import React from 'react';

import { FormContext, useForm } from 'react-hook-form';

import Button from '../Button';
import { Container, Input, InputArea, TextArea } from './styles';

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    // console.log(data);
    return data;
  };

  return (
    <FormContext>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <InputArea>
          <Input
            ref={register}
            shk={0}
            grow={1}
            width="300px"
            name="name"
            placeholder="Seu nome"
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
            placeholder="Descreva aqui sua mensagem..."
          />
        </TextArea>
        <Button text="Enviar" primary />
      </Container>
    </FormContext>
  );
}
