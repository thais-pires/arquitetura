/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { Link } from "react-router-dom";

export const projetos = () => {
    return (
      <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Projetos</title>
        <link rel="stylesheet" type="text/css" href="../css/pagina-projetos.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous" />
      <aside className="aside">
        <Link to="/" className="logo"><img src="../Imagens/Imagens-index/Logo.png" id="marca" /></Link>
        <div className="menu">
          <Link to="/"><div>INÍCIO</div></Link>
          <Link to="/projetos"><div>PROJETOS</div></Link>
          <Link to="/servicos"><div>SERVIÇOS</div></Link>
          <Link to="/contato"><div>CONTATO</div></Link>
        </div>
        <div className="footer">
          <a href="https://www.youtube.com/channel/UC_ufaPpQbVY1Ch8RztkNj1g" target="_blank" rel="noreferrer"><i className="fab fa-youtube" /></a>
          <a href="https://www.instagram.com/arq_luiz_carlos/?hl=pt-br" target="_blank" rel="noreferrer"><i className="fab fa-instagram-square" /></a>
        </div>
      </aside>
      <main className="main">
          <Link to="/" className="voltar-menu">MENU<i className="fas fa-ellipsis-v" /></Link>
          <Link to="/centrogastronomico" id="centro-gastronomico">
            <div>
              <i className="fas fa-utensils" /><br />
              CENTRO GASTRONÔMICO
            </div>
            <div><img src="Imagens/Imagens-projetos/centro.jpg" /></div>
          </Link>
          <Link to="/predio" id="predio">
            <div>
              <i className="far fa-building" /><br />
              PRÉDIO EMPRESARIAL
            </div>
            <div><img src="Imagens/Imagens-projetos/predio.jpg" /></div>
          </Link>
          <Link to="/praça" id="praça">
            <div>
              <i className="fab fa-dribbble-square" /><br />
              PRAÇA
            </div> 
            <div><img src="Imagens/Imagens-projetos/praça.jpg" /></div>
          </Link>
          <Link to="/interiores" id="interiores">
            <div>
              <i className="fas fa-couch" /><br />
              INTERIORES
            </div>
            <div><img src="Imagens/Imagens-projetos/interiores.jpg" /></div>
          </Link>
          <Link to="/casas" id="casas">
            <div>
              <i className="fas fa-home" /><br />
              CASAS
            </div>
            <div><img src="Imagens/Imagens-projetos/casa.jpg" /></div>
          </Link>
          <Link to="/escola" id="escola">
            <div>
              <i className="fas fa-graduation-cap" /><br />
              ESCOLA
            </div>
            <div><img src="Imagens/Imagens-projetos/escola.jpg" /></div>
          </Link>
        </main> 
      </div>
    );
};