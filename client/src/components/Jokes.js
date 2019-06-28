import React, { Component } from 'react';
import axios from 'axios';
import requiresAuth from './requiresAuth';

class Jokes extends Component {
  state = {
    jokes: [],
  };

  componentDidMount() {
    const end = 'http://localhost:3300/api/jokes';
    
    axios
      .get(end)
      .then(res => {
        console.log(res.data)
        this.setState({ jokes: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
       
      <div className= 'jokes'>
        <h2>Jokes</h2>
        <ul>
          {this.state.jokes.map(u => {
           return <li key={u.id}>{u.joke}</li>
          })}
        </ul>
      </div>
    );
  }
}
export default requiresAuth(Jokes);