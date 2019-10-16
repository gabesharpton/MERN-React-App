import React from 'react';
import {Component} from 'react'
import './App.css';
import data from './data/data.json'
import {Link, Route, Switch} from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }
  render(){
  return (
    <div className="App">
      <nav>
      <Link to="/"><img src="https://img.icons8.com/office/30/000000/reddit.png" alt=""/></Link>
      </nav>
    <h1> {this.props.data[0].test}</h1>
    <input type="text"></input>
    <input type="submit" />
    <main>
      <Switch>
      <Route to="/"/>
      </Switch>
    </main>
    </div>
  );
}
}
