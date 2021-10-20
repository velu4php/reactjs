import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Learn from './components/Learn';
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
    <div>
      <h2>Parent Component</h2>
        <div>Child data = {this.state.name}</div>
        <h2>Child Component</h2>
        <Learn sendDataToParent={this.receiveDataFromChild}/>
      </div>
  )
  }
}

export default App;
