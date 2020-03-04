import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormContext, useForm } from 'react-hook-form';

// import { useDispatch } from 'react-redux';

// import { setPageModeRequest } from '~/store/modules/page/actions';

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

export default function SignIn() {
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
            </InputArea>

            <StyledButton primary>Entrar</StyledButton>
            <NavLink to="/signup">
              <StyledButton>Quero me Cadastrar!</StyledButton>
            </NavLink>
          </Form>
        </FormContext>

        <Footer />
      </Content>
    </Container>
  );
}
