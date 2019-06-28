import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {

  state = {
    username: '',
    password: ''
  };

  render() {
    return (
      <>
        <h2 className= 'login'>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name='username'
              value={this.state.username}
              onChange={this.handleInputChange}
              type='text'
              placeholder='username'
            />
          </div>
          <div>
            <input
              name='password'
              value={this.state.password}
              onChange={this.handleInputChange}
              type='password'
              placeholder='password'
            />
          </div>
          <div>
            <button type='submit'>Login</button>
          </div>
        </form>
      </>
    );
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    
    const endpoint = 'http://localhost:3300/api/';
    axios.post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token); 
        this.props.history.push('/jokes');
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export default Login;