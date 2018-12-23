import React, { Component } from 'react';
import '../../css/w3.css';
import './css/login.css'
import sha256 from 'crypto-js/sha256';
import Validator from '../validator/validator';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as sessionActions from '../../service/sessionActions';
import Input from './Input';

class Login extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
        user: {
          email: '',
          password: ''
        }
      };
   this.onSubmit = this.onSubmit.bind(this);
   this.onChange = this.onChange.bind(this);
  }
static validate= function(){
      var flag= true;
      var userName = document.getElementById("user-name").value;
      var password = document.getElementById("password").value;
      if(userName === ""){
         Validator.showError("user-name","Required");
         flag = false;
      }
      if(password === ""){
         Validator.showError("password","Required");
         flag = false;
      }
      return flag;
   }
   onSubmit(history) {
      const { user } = this.state;
      const { login } = this.props.actions;
      if(Login.validate()){
         var loaderDOM = document.getElementById("loader");
         var formAreaDOM = document.getElementById("form-area");
         loaderDOM.style.display = "inline-block";
         formAreaDOM.style.display="none";
         setTimeout(function(){
            login(user, history);
         },1000);
      }else{

      }
    }
  
    onChange(e) {
      const { value, name } = e.target;
      const { user } = this.state;
      user[name] = value;
      this.setState({ user });
    } 
    render() {
      const { user: { email, password } } = this.state;
      const SubmitButton = withRouter(({ history }) => (
        <button id="submit-button"
          onClick={() => this.onSubmit(history)}
          type="submit">Login
        </button>
      ));
  
      return (
        <div>
           <div id="loader" class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
           <div id = "form-area" className="login w3-animate-zoom">
           <h3>LOGIN</h3>
          <Input
            id="user-name"
            name="email"
            value={email}
            label="Email"
            type="email"
            onChange={this.onChange}
          />
          <Input
            id="password"
            name="password"
            value={password}
            label="Password"
            type="password"
            onChange={this.onChange}
          />
          <SubmitButton />    
           </div> 
        </div>
      );
    }
  }
  
  const { object } = PropTypes;
  
  Login.propTypes = {
    actions: object.isRequired
  };
  
  const mapDispatch = (dispatch) => {
    return {
      actions: bindActionCreators(sessionActions, dispatch)
    };
  };
  
export default connect(null, mapDispatch)(Login);

