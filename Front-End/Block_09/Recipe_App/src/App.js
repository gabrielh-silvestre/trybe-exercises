import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/home';
import ListPage from './pages/ListPage';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Explore from './pages/Explore';
import Detail from './pages/Detail';
import ExploreFoodsOrDrinks from './pages/ExploreFoodsOrDrinks';
import ExploreByIngredient from './pages/ExploreByIngredient';
import ExploreByNationality from './pages/ExploreByNationality';
import Progress from './pages/Progress';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="text-black min-h-screen bg-background">
      <Switch>
        <Route exact path="/foods/:id/in-progress" component={ Progress } />
        <Route exact path="/foods" component={ ListPage } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="/drinks/:id/in-progress" component={ Progress } />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreByIngredient }
        />
        <Route exact path="/explore/drinks" component={ ExploreFoodsOrDrinks } />
        <Route exact path="/drinks/:id" component={ Detail } />
        <Route exact path="/drinks" component={ ListPage } />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreByNationality }
        />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreByIngredient }
        />
        <Route exact path="/explore/foods" component={ ExploreFoodsOrDrinks } />
        <Route exact path="/foods/:id" component={ Detail } />
        <Route exact path="/" component={ Login } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
