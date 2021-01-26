import React, { useState } from 'react';
import Nav from './components/Navigation/Nav';
import Search from './components/Search/search';
import { Button } from 'semantic-ui-react';
import './App.css';

function App() {

  return (
    <div className="App">
      <Nav/>
      <h4 class="ui horizontal divider header">
        <i class="tag icon" />
        Order #001
      </h4>
      <Search />
    </div>
  );
}

export default App;
