
import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';


function Contato() {
  return (
    <div className="home" id="contato">
        <h1>Entre em contato</h1>
        <h2>Tel: (xx) 9 9999-9999</h2>
        <h3>Rua: Alguma, endereço</h3>
        <Link smooth to="#home">Home</Link>
    </div>
  );
}

export default Contato;
