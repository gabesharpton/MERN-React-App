import React from 'react';
import {Component} from 'react'
import './App.css';
import data from './data/data.json'

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
    <h1> {this.props.data[0].test}</h1>
    </div>
  );
}
}
