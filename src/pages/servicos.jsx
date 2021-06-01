/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { Link } from "react-router-dom";

export const servicos = () => {
    return (
      <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Serviços</title>
        <link rel="stylesheet" type="text/css" href="../css/servicos.css" />
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
          <div className="servicos">
            <h1>SERVIÇOS OFERTADOS:</h1>       
            <div> Projeto executivo</div>
            <div>Projeto Paisagístico</div>
            <div>Projeto de interiores</div>
            <div>Modelagem e renderização 3D</div>
            <div>Animação 3D</div>       
          </div>
        </main>      
      </div>
    );
};