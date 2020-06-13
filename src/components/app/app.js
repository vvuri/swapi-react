import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectPerson: 5//null
  }

  onPersonSelected = id => {
    this.setState({
      selectPerson: id
    })
  }

  render () {
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
    
    return (
      <div>
        <Header />
        <RandomPlanet />
  
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
