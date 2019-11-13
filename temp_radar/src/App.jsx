import React, { Component} from 'react';

import Data from "./Data"
import AddData from "./AddData";
import "./App.css";


class App extends Component{
  constructor(){
    super()
    const event = {
      id: 0,
      date: "2019-11-13 15:46:34",
      outdoor: "16.0",
      indoor: "22.5",
      heaterSets: "40",
      heater: "40.2",
      boiler: "65.9",
      pompStatus: true,
      blowerStatus: false,
      boilerStatus: false
    }
    this.state = {
      events: [ event ]
    }
  }
  render(){
    const events = this.state.events.map(el => {
    return <Data
              key = {el.id}
              id = {el.id}
              date = {el.date} 
              outdoor = {el.outdoor} 
              indoor = {el.indoor} 
              heaterSets = {el.heaterSets} 
              heater = {el.heater} 
              boiler = {el.boiler} 
              pompStatus = {el.pompStatus} 
              blowerStatus = {el.blowerStatus} 
              boilerStatus = {el.boilerStatus} 
            />
    });
    const length = this.state.events.length
    const event = events[length - 1]
  return <div className = "app">
            {event}
            <AddData/>
          </div>
  }
}

export default App;
