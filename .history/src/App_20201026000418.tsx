import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import { ChevronRight } from 'react-feather';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/re' exact component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
