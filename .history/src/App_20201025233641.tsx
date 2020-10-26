import styled from '@emotion/styled';
import React from 'react';
import './App.css';
import Banner from './components/Banner';
import BlogCard from './components/BlogCard';
import Navbar from './components/Navbar';
import Programs from './components/Programs';
import whiteBg from './images/whitebg.svg';


import { Link, Route, Switch } from 'react-router-dom';
import { ChevronRight } from 'react-feather';
import Footer from './components/Footer';


function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  );
}

export default App;

