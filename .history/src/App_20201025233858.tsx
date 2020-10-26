import styled from '@emotion/styled';
import React from 'react';
import './App.css';



import { Link, Route, Switch } from 'react-router-dom';
import { ChevronRight } from 'react-feather';
import Footer from './components/Footer';
import Home from './pages/Home';


function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  );
}

export default App;

