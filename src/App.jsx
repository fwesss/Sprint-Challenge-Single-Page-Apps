import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import CharacterList from './components/CharacterList';

import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './components/WelcomePage';


export default function App() {
  const [query, setQuery] = useState({});

  return (
    <main>
      <Header setQuery={setQuery} />
      <Route exact path="/" component={WelcomePage} />
      <Route
        path="/characters"
        render={() => (
          <CharacterList query={query.query} />
        )}
      />
    </main>
  );
}
