import React from 'react';
import Nav from './Nav';
import Titlebar from './Titlebar';
import Footer from './Footer';
import Hero from './Hero';
import Blocks from './Blocks';
import './Home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav className="nav"></Nav>
        <Titlebar className="titlebar"></Titlebar>
        <Hero className="hero"></Hero>
        <Blocks className="blocks"></Blocks>
        <Footer className="footer"></Footer>
      </div>
    );
  }
}