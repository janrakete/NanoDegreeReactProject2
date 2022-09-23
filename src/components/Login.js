import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { UserLoginHandle } from "../actions/UserLoginLogout";

function Login({ dispatch, UserLoginLogout, UsersReceive }) {

  const navigate = useNavigate();

  if (UserLoginLogout) {
		navigate("/");
  }

  const LoginHandleSubmit = (event) => {
    event.preventDefault();
    dispatch(UserLoginHandle(event.target.elements.username.value));
  };

	const disabled = UsersReceive != null ? "" : "disabled";

  return (
		<div className="container">
			<div className="row">
				<h1>The Poll-utor</h1>
			</div>
			<form onSubmit={LoginHandleSubmit}>
				<div className="row">			
					<input type="text" placeholder="Your ID" name="username" defaultValue="mtsamis" required />
				</div>
				<div className="row">			
					<input type="password" placeholder="Your password (tbd)" name="password" defaultValue="xyz123" required />
				</div>
				<div className="row">			
					<input type="submit" value="Login to The Poll-utor" className="button" disabled={disabled} />
				</div>
			</form>
		</div>    
    )
  }

const mapStateToProps = ({ UserLoginLogout, UsersReceive }) => ({
  UserLoginLogout,
  UsersReceive
});

export default connect(mapStateToProps)(Login);