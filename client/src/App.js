import React, {Component} from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';
//
import Register from './components/Register';
import Login from './components/Login';
import Jokes from './components/Jokes';
//
import './App.css';


class App extends Component {
  render() {
    return(
      <>
      <header>
        <nav>
          <NavLink className= 'navlink' to= '/register'>Register</NavLink>
          <NavLink className= 'navlink' to= '/'>Login</NavLink>
          <NavLink className= 'navlink' to= '/jokes'>Jokes</NavLink>
          <button onClick= {this.logout}>Logout</button>
        </nav>
      </header>

      <main>
        <Route path='/register' component= {Register} />
        <Route exact path='/' component= {Login} />
        <Route path='/jokes' component= {Jokes} />
      </main>
      </>
    )
  }
  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/');
  }
}



export default withRouter(App);
