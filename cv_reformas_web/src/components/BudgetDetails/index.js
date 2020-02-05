import React, { useState } from 'react';

import cep from '~/services/cep';

import { Container, Input, InputArea } from './styles';

// import DropdownMenu from '../DropdownMenu';

export default function BudgetFields() {
  const [adress, setAdress] = useState({
    logradouro: '',
    cep: '',
    bairro: '',
    cidade: '',
    uf: '',
  });

  const [CEP, setCEP] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  function handleChangeCep() {
    const validate = /^[0-9]{8}$/;

    if (validate.test(CEP)) {
      cep.get(`/${CEP}/json`).then(
        response => {
          if (response.data.erro) {
            setCEP('Cep Inválido');
          } else {
            setLogradouro('');
            setBairro('');
            setAdress(response.data);
          }
        },
        error => {
          setLogradouro('');
          setBairro('');
          setCEP('Cep Inválido');
          return error;
        },
      );
    } else {
      setCEP('Cep Inválido');
    }
  }

  return (
    <Container>
      <div>
        <h1>Localização da obra ou instalação:</h1>
      </div>
      <InputArea>
        <Input
          value={CEP || adress.cep}
          onChange={e => setCEP(e.target.value)}
          shk={4}
          width="50px"
          type="text"
          placeholder="CEP"
          onBlur={handleChangeCep}
        />
        <Input
          onChange={e => setLogradouro(e.target.value)}
          shk={1}
          grow={1}
          width="250px"
          type="text"
          placeholder="Nome da rua"
          value={logradouro || adress.logradouro}
        />
        <Input
          value={numero}
          onChange={e => setNumero(e.target.value)}
          shk={5}
          grow={0}
          width="50px"
          type="text"
          placeholder="numero"
        />
        <Input
          onChange={e => setBairro(e.target.value)}
          shk={0}
          grow={0}
          width="50px"
          type="text"
          placeholder="Bairro"
          value={bairro || adress.bairro}
        />
        <Input
          onChange={e => setCidade(e.target.value)}
          shk={0}
          grow={1}
          width="50px"
          type="text"
          placeholder="Cidade"
          value={cidade || adress.localidade}
        />
        <Input
          onChange={e => setUf(e.target.value)}
          shk={0}
          grow={0}
          width="50px"
          type="text"
          placeholder="UF"
          value={uf || adress.uf}
        />
      </InputArea>

      <div className="line" />

      <div>
        <h1>Informações adicionais:</h1>
      </div>
      <InputArea>
        <Input
          onChange={e => setCidade(e.target.value)}
          shk={0}
          grow={1}
          width="50px"
          type="text"
          placeholder="Numero de pavimentos"
        />
        <Input
          onChange={e => setUf(e.target.value)}
          shk={0}
          grow={1}
          width="50px"
          type="text"
          placeholder="Número de comodos"
        />
        <Input
          onChange={e => setUf(e.target.value)}
          shk={0}
          grow={1}
          width="50px"
          type="text"
          placeholder="Altura"
        />
        <Input
          onChange={e => setCidade(e.target.value)}
          shk={0}
          grow={1}
          width="50px"
          type="text"
          placeholder="Largura"
        />
        <Input
          onChange={e => setUf(e.target.value)}
          shk={0}
          grow={1}
          width="50px"
          type="text"
          placeholder="Profundidade"
        />
        <Input
          onChange={e => setUf(e.target.value)}
          shk={0}
          grow={1}
          width="50px"
          type="text"
          placeholder="Número de pontos de luz"
        />
        <Input
          onChange={e => setUf(e.target.value)}
          shk={0}
          grow={1}
          width="50px"
          type="text"
          placeholder="Número de paredes"
        />
        <Input
          onChange={e => setUf(e.target.value)}
          shk={0}
          grow={1}
          width="50px"
          type="text"
          placeholder="Número de portas"
        />
        <Input
          onChange={e => setUf(e.target.value)}
          shk={0}
          grow={1}
          width="50px"
          type="text"
          placeholder="Número de janelas"
        />
      </InputArea>
    </Container>
  );
}
