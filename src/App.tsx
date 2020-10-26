import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/signup' component={Register} />
        <Route path='/about' component={About} />
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
