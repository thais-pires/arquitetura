/* eslint-disable jsx-a11y/alt-text */

import {React} from 'react';
import { Link } from "react-router-dom";


export const contato = () => {

  function formSubmit(e){
    e.preventDefault();  
    const formulario = window.document.querySelector("#formContato")   
    const dadosForm = Object.fromEntries(new FormData(formulario));
    console.log(dadosForm);
    validarEmail(dadosForm)
    validarTelefone(dadosForm)
  }

  function validarEmail(dadosForm){
    const pattern = /\S+@\S+\.\S+/
    if(!pattern.test(dadosForm.email)){
      window.alert("Email invalido")
    }
  }

  function validarTelefone(dadosForm){
    const pattern = /^\([1-9]{2}\) 9[0-9]{4}-[0-9]{4}$/

    if(!pattern.test(dadosForm.telefone)){
      window.alert("Telefone invalido")
    }
  }
 
  return (
      <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contato</title>
        <link rel="stylesheet" type="text/css" href="../css/contato.css" />
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
          <div id="formulario">
            <h1>Entre em contato conosco:</h1>
            <form id="formContato" onSubmit={formSubmit}>
              <label htmlFor="nome">Nome: </label>
              <input type="text" name="nome" id="nome" placeholder="Insira seu nome" required />
              <br /><br />
              <label htmlFor="telefone">Telefone: </label>
              <input type="text" name="telefone" id="telefone" placeholder="Ex: (xx) xxxxx-xxxx" required />
              <br /><br />
              <label htmlFor="email">Email: </label>
              <input type="text" name="email" id="email" placeholder="Ex: exemplo@servidor.com" required />
              <br /><br /><br />
              <label htmlFor="comentario">Insira aqui seu comentário: </label><br /><br />
              <textarea name="comentario" id="comentario" cols={30} rows={10} defaultValue={""} /><br /><br />
              <button type="submit">Enviar</button>
            </form>
            <div>
              <p>Email para contato: luizcrls@gmail.com</p>
            </div>
          </div>  
        </main>
      </div>
    );
};