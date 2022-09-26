import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { UserLoginHandle } from "../actions/UserLoginLogout";

function Login({ dispatch, UserLoginLogout, Users }) {
  const navigate = useNavigate();

  if (UserLoginLogout && (UserLoginLogout !== "error-unknown-user")) {
		navigate("/");
  }

  const LoginHandleSubmit = (event) => {
	  event.preventDefault();
    dispatch(UserLoginHandle(event.target.elements.username.value));
  };

	const disabled = Users != null ? "" : "disabled";

  return (
		<div className="container">
			<div className="row">
				<h1>The Poll-utor</h1>
			</div>
			{ UserLoginLogout === "error-unknown-user" && 
			<div className="row bold" data-testid="error-message">
				Unknown user.
			</div>
			}
			<form onSubmit={LoginHandleSubmit}>
				<div className="row">			
					<input type="text" placeholder="Your ID" name="username" defaultValue="mtsamis" required data-testid="username-field" />
				</div>
				<div className="row">			
					<input type="password" placeholder="Your password (tbd)" name="password" defaultValue="xyz123" required />
				</div>
				<div className="row">			
					<input type="submit" value="Login to The Poll-utor" className="button" disabled={disabled} data-testid="login-submit" />
				</div>
			</form>
		</div>    
    )
  }

const mapStateToProps = ({ UserLoginLogout, Users }) => ({
  UserLoginLogout,
  Users
});

export default connect(mapStateToProps)(Login);