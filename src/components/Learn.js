import React from 'react';
import { Link } from 'react-router-dom';
class Learn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Test'
        }
    }
    handleChange = (event) => {
        this.setState({name:event.target.value});
    }
    sendDataToParent = () => {
       this.props.sendDataToParent(this.state.name);
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <button style={{"margin-left":"20px"}} onClick={this.sendDataToParent}>Send Data To Parent</button>
            </div>
            );
    }
}

export default Learn;