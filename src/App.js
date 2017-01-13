import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import {Router, Route, browserHistory} from 'react-router';
import './App.css';

class App extends Component {

  render() {
    return(
      <div>
        <Header title="Movies"/>
        <SearchBar />
        {this.props.children}
      </div>
    );

  }

}

export default App;