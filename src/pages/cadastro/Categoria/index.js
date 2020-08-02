import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infoDoEvento) {
    const { getAttribute, value } = infoDoEvento.target;
    setValue(
      getAttribute('name'),
      value,
    );
  }

  useEffect(() => {
    setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          id: 1,
          nome: 'Front End',
          descricao: 'categoria aleatoria',
          cor: '#6bdf11',
        },
        {
          id: 2,
          nome: 'Back End',
          descricao: 'segunda categoria aleatoria',
          cor: '#6bdf11',
        },
      ]);
    }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categorias:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(infoDoEvento) {
          infoDoEvento.preventDefault();

          setCategorias([
            ...categorias,
            values,
          ]);
          setValues(valoresIniciais);
        }}
      >

        <FormField
          label="Nome Da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <div />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading....
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
