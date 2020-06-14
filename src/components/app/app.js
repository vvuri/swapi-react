import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './app.css';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectPerson: null,
    hasError: false
  }

  onPersonSelected = id => {
    this.setState({
      selectPerson: id
    })
  }

  componentDidCatch() {
    console.log('componentDidCatch');
    this.setState({ hasError: true });
  }

  render () {
    if (this.state.hasError)
      return (
        <ErrorIndicator />
      )  

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
    
    return (
      <div>
        <Header />
        { planet }
  
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectPerson}/>
          </div>
        </div>
      </div>
    );
  }
}
