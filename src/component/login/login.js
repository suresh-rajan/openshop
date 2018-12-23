import React, { Component } from 'react';
import '../../css/w3.css';
import './css/login.css'
import sha256 from 'crypto-js/sha256';
import Validator from '../validator/validator';

class Login extends Component {
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
   submit=function(){
      if(Login.validate()){
         var loaderDOM = document.getElementById("loader");
         var formAreaDOM = document.getElementById("form-area");
         loaderDOM.style.display = "inline-block";
         formAreaDOM.style.display="none";
         alert(sha256("password"));
      }
   } 
   render() {
      return(
         <div>
            <div class="lds-ellipsis" id="loader"><div></div><div></div><div></div><div></div></div>
            <div id="form-area"className="login w3-animate-zoom"> 
               <label>User Name</label>
               <input id="user-name" type="text"/>
               <label>Password</label>
               <input id="password" type="password"/>
               <button id="submit-button" onClick={this.submit}>Login</button>
            </div>
         </div>
      );  
    }

}

export default Login