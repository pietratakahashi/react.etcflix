import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://fontmeme.com/permalink/200805/d736e58ea16eb73dc25e671ac501611a.png" alt="Logo" />
      </a>
      <p>
        Desenvolvido com ❤ por Pyetra durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
