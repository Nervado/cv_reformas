/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { MdError } from 'react-icons/md';
import { useFormContext, Controller } from 'react-hook-form';
// import { store } from '../../store/index';

import { getValues } from '../../utils/helpers/getValues';
// import { schema } from '../../utils/schemas/budget.schema';
// import { store } from '../../store/index';
import SimpleDatePicker from '~/components/SimpleDatePicker';

import { Container, Input, TextArea, InputArea } from './styles';

import DropdownMenu from '../DropdownMenu';

export default function BudgetFields() {
  const { register, methods, errors, setValue } = useFormContext();

  /*
  function getValues() {
    const data = store.getState().budgets.budget;

    const values = [];
    Object.keys(data).forEach(k => {
      const o = {};
      o[k] = data[k];
      test.push(o);
    });

    return values;
  }
  */

  useEffect(() => {
    setValue(getValues());
  }, [setValue]);

  return (
    <Container {...methods}>
      <InputArea>
        <Input
          ref={register}
          shk={0}
          width="150px"
          name="username"
          placeholder="Seu nome"
        />
        {errors.username && (
          <p className="yup-warn">
            <MdError />
          </p>
        )}
        <Input
          ref={register}
          shk={0}
          grow={1}
          width="300px"
          name="surname"
          placeholder="Seu sobrenome"
        />
        {errors.surname && (
          <p className="yup-warn">
            <MdError />
          </p>
        )}
        <Input
          ref={register}
          shk={0}
          grow={1}
          width="300px"
          name="email"
          placeholder="Seu email"
        />
        {errors.email && (
          <p className="yup-warn">
            <MdError />
          </p>
        )}
        <Input
          ref={register}
          shk={0}
          width="200px"
          placeholder="Seu telefone"
          name="phoneNumber"
        />
        {errors.phoneNumber && (
          <p className="yup-warn">
            <MdError />
          </p>
        )}
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
      {errors.description && (
        <p className="yup-warn">
          <MdError />
        </p>
      )}
      <InputArea>
        <Controller
          as={<DropdownMenu />}
          name="category"
          onChange={selected => {
            return selected;
          }}
          defaultValue={getValues('budgets', 'budget').category}
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
        {errors.category && (
          <p className="yup-warn">
            <MdError />
          </p>
        )}
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
        {errors.date && (
          <p className="yup-warn">
            <MdError />
          </p>
        )}
      </InputArea>
    </Container>
  );
}
