import React,{Component} from 'react';
import {connect} from 'react-redux';

import {logIn} from '../../redux/action/index.js';

const mapStateToProps=(state)=>{
  return {
    auth:state.userReducer.auth,
    userName:state.userReducer.userName
  }
}

class Main extends Component {
    constructor(props){
      super(props);
      this.renderForm= this.renderForm.bind(this);
      this.SignIn = this.SignIn.bind(this);
    }
    SignIn(e){
      e.preventDefault();
      var user = this.refs.userName.value;
      var pass = this.refs.password.value;
      this.props.dispatch(logIn({userName:user,password:pass}));
      this.props.history.push('/'+user);
    }
    renderForm(){
      return(
            <form className="form-horizontal" onSubmit={this.SignIn}>
            <fieldset>
              <legend>Enter Your Log Account</legend>
              <div className="form-group">
                <label htmlFor="inputName" className="col-lg-2 control-label">Email</label>
                <div className="col-lg-4">
                  <input ref="userName" type="text" className="form-control" id="inputEmail" placeholder="Email"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
                <div className="col-lg-4">
                  <input ref="password" type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-lg-4 col-lg-offset-2">
                  <input type="submit" className="btn btn-primary" value="Log In"/>
                </div>
              </div>
            </fieldset>
          </form>
      );
    }
    render() {
          return (
              <div className="container" >
                <h1>To Do Application</h1>
                  {this.renderForm()}
              </div>
          );
    }
}
export default connect (mapStateToProps)(Main);