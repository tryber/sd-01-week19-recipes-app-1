import React from 'react';
import { BrowserRouter, Switch ,Route} from 'react-router-dom';

import './App.css';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/comidas" />
        <Route exact path="/bebidas" />
        <Route path="/receitas-feitas" />
        <Route path="/receitas-favoritas" />
        <Route exact path="/explorar/comidas" />
        <Route exact path="/explorar/bebidas" />
        <Route path="/explorar/comidas/ingredientes" />
        <Route path="/explorar/bebidas/ingredientes" />
        <Route path="/explorar/comidas/area" />
        <Route path="/perfil" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
