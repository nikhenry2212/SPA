
import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';


function Sobre() {
  return (
    <div className="sobre" id="sobre">
        <h1>Sobre</h1>
        <h2>Sobre React Js</h2>
        <h3>Nossa História</h3>
        <Link smooth to="#home">Home</Link><br/>
        <Link smooth to="#contato">Contato</Link>
    </div>
  );
}

export default Sobre;
