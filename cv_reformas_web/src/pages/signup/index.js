import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormContext, useForm } from 'react-hook-form';

import Footer from '~/components/Footer';

import GlobalStyle from '../../styles/global';
import logo from '~/assets/logo.svg';

import {
  Container,
  Content,
  Input,
  InputArea,
  Form,
  StyledButton,
} from './styles';

export default function SignUp() {
  // const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    // console.log(data);
    return data;
  };

  return (
    <Container>
      <GlobalStyle opctMax />
      <Content>
        <FormContext>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <NavLink to="/">
              <img src={logo} alt="logo" width="163px" height="134px" />
            </NavLink>
            <InputArea>
              <Input
                ref={register}
                shk={0}
                width="300px"
                name="name"
                placeholder="Seu nome"
              />
              <Input
                ref={register}
                shk={0}
                width="300px"
                name="email"
                placeholder="Seu email"
              />
              <Input
                ref={register}
                shk={0}
                width="300px"
                placeholder="Senha"
                name="password"
                type="password"
              />
              <Input
                ref={register}
                shk={0}
                width="300px"
                placeholder="Confirme sua senha"
                name="confirmPassword"
                type="password"
              />
            </InputArea>

            <StyledButton primary>Enviar</StyledButton>

            <NavLink to="/signin">
              <StyledButton>Já tenho cadastro</StyledButton>
            </NavLink>
          </Form>
        </FormContext>

        <Footer />
      </Content>
    </Container>
  );
}
