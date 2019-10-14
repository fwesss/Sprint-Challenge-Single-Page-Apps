import React from 'react';

import Header from './components/Header';
import CharacterList from './components/CharacterList';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <main>
      <Header />
      <CharacterList />
    </main>
  );
}
