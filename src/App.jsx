import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import CharacterList from './components/CharacterList';

import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './components/WelcomePage';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route
        path="/characters"
        component={CharacterList}
      />
    </main>
  );
}
