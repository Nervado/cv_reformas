/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';
import logo from '~/assets/logo.svg';

import AvatarInput from '../AvatarInput';

import CurriculumFields from '../CurriculumFields';
import CurriculumFooter from '../CurriculumFooter';

export default function CurriculumForm() {
  const methods = useForm();

  const onSubmit = data => {
    console.log(data);
    return data;
  };

  return (
    <FormContext {...methods}>
      <Container onSubmit={methods.handleSubmit(onSubmit)}>
        <NavLink className="logo-wrapper" to="/">
          <img src={logo} alt="logo" width="81px" height="67px" />
        </NavLink>
        <AvatarInput />
        <CurriculumFields />
        <CurriculumFooter />
      </Container>
    </FormContext>
  );
}
