import styled from '@emotion/styled';
import React from 'react';
import './App.css';
import Banner from './components/Banner';
import BlogCard from './components/BlogCard';
import Navbar from './components/Navbar';
import Programs from './components/Programs';
import whiteBg from './images/whitebg.svg';

import startHtml from './images/starthtml.png';
import cssgrid from './images/cssgrid.png';
import flexbox from './images/flexbox.png';
import { Link, Route, Switch } from 'react-router-dom';
import { ChevronRight } from 'react-feather';
import Footer from './components/Footer';

let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis esse vel labore id autem ducimus!`;

let data = [
  {
    title: 'Getting started with HTML',
    image: startHtml,
    text: text,
  },
  {
    title: 'Understanding CSS Grid',
    image: cssgrid,
    text: text,
  },
  {
    title: 'CSS Grid vs Flexbox',
    image: flexbox,
    text: text,
  },
];

function App() {
  return (
    <Switch>
      <Route path='/' exact component={}
    </Switch>
  );
}

export default App;

