import React from 'react'
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import shape2Logo from "../assets/images/shap-02.png";
import "../assets/css/style.css";
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.onchangeLogin = this.onchangeLogin.bind(this);
      this.state = {
        email: '',
        password: ''
      }
    }
    onchangeLogin = function(event) {
     this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = function(event) {
      event.preventDefault();
      axios({
        method: 'GET',
        url: 'http://localhost:8080/users/login/',
        params: {
          email: this.state.email,
          password: this.state.password,
        }
      })
        .then(function (response) {
          console.log(response);
        });
    }
    render() {
        const LoginForm = <form id="loginform"  onSubmit={this.handleSubmit.bind(this)} className="form-vertical">
          <section className="form-08">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="_form-08-main">
                <div className="_form-08-head">
                  <h2>Welcome Back</h2>
                </div>
  
                <div className="form-group">
                  <label>Enter Your Email</label>
                  <input type="email" name="email" className="form-control" type="text" placeholder="Enter Email" required="" aria-required="true" onChange={this.onchangeLogin} value={this.state.email}/>
                </div>
  
                <div className="form-group">
                  <label>Enter Password</label>
                  <input type="password" name="password" className="form-control" type="text" placeholder="Enter Password" required="" aria-required="true"  onChange={this.onchangeLogin} value={this.state.password}/>
                </div>
  
                {/* <div className="checkbox mb-0 form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="" />
                    <label className="form-check-label" for="">
                      Remember me
                    </label>
                  </div>
                  <a href="#">Forgot Password</a>
                </div> */}
  
                <div className="form-group">
                  <div className="_btn_04">
                    <button type="submit">Login</button>
                  </div>
                </div>
  
                <div className="sub-01">
                  <img src={shape2Logo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></form>;
      return(
        LoginForm
      )
    }
}

export default Login;