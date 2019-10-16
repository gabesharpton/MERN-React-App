import React from 'react';
import {Component} from 'react'
import './App.css';
import data from './data/data.json'
import {Link, Route, Switch} from 'react-router-dom'
import Post from "./Post"

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
      <Link to='/post'>Posts</Link>
      
    <h1> {this.props.data[1].name}</h1>
    <input type="text"></input>
    <input type="submit" />
    <button>Login</button>
    <button>Sign up!</button>
    </nav>
    <main>
    <Post> </Post>
      <Switch>
      <Route path="/"/>
  <Route path="/post" render={() => <Post data={this.props.data[0].post} />} />
      </Switch>
    </main>
    </div>
  );
}
}
