import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'Empty Now'
    }
  }
  receiveDataFromChild = (name) => {
    console.log(name);
    this.setState({name:name});
  }
  render() {
  return (
    <Login/>
  )
  }
}

export default App;
