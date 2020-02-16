import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import FoodPage from './components/FoodPage';
import ExplorePage from './components/ExplorePage';
import ExploreFood from './components/ExploreFood';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/comidas" />
        <Route exact path="/bebidas" />
        <Route path="/receitas-feitas" />
        <Route path="/receitas-favoritas" />
        <Route exact path="/explorar" component={ExplorePage} />
        <Route exact path="/explorar/comidas" component={ExploreFood}/>
        <Route exact path="/explorar/bebidas" component={ExploreFood}/>
        <Route path="/explorar/comidas/ingredientes" />
        <Route path="/explorar/bebidas/ingredientes" />
        <Route path="/explorar/comidas/area" />
        <Route path="/perfil" component={ProfilePage} />
        <Route exact path="/receitas/comidas" component={FoodPage} />
        <Route exact path="/receitas/bebidas" component={FoodPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
