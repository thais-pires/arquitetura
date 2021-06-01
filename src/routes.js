import React from "react";
import { home } from "./pages/home"
import { contato } from "./pages/contato"
import { projetos } from "./pages/projetos"
import { servicos } from "./pages/servicos"
import { casas } from "./pages/casas"
import { centrogastronomico } from "./pages/centrogastronomico"
import { escola } from "./pages/escola"
import { interiores } from "./pages/interiores"
import { praça } from "./pages/praça"
import { predio } from "./pages/predio"
import { Switch, Route } from "react-router-dom"

export const Routes = () => {
return (
    <Switch>
<Route path="/" component={home} exact />
<Route path="/contato" component={contato} />
<Route path="/projetos" component={projetos} />
<Route path="/servicos" component={servicos} />
<Route path="/casas" component={casas} />
<Route path="/centrogastronomico" component={centrogastronomico} />
<Route path="/escola" component={escola} />
<Route path="/interiores" component={interiores} />
<Route path="/praça" component={praça} />
<Route path="/predio" component={predio} />
<Route component={() => <div>Erro 404! Página não encontrada</div>} />
    </Switch>
)

}
