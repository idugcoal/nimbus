import React from 'react';
import Nav from './Nav';
import Titlebar from './Titlebar';
import './Home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav className="nav"></Nav>
        <Titlebar className="titlebar"></Titlebar>
        <div className="hero"></div>
        <div className="blocks"></div>
        <div className="footer"></div>
      </div>
    );
  }
}