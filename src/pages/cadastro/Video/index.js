/* eslint-disable no-alert */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({

  });

  return (
    <PageDefault>
      <h1>Cadastro de Videos </h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        alert('Video cadastrado com sucesso!');

        history.push('/');
      }}
      >
        <FormField
          label="Titulo Do Video"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
