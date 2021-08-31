import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom'
import CharactersList from './pages/CharactersList/CharactersList';
import NotFound from './pages/NotFound/NotFound';

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <CharactersList/>
                </Route>
                <Route path="*">
                    <NotFound/>
              </Route>
            </Switch>
        </Router>
      )
}

export default Routes;