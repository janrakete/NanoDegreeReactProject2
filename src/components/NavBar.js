import React from "react";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { UserLogoutHandle } from "../actions/UserLoginLogout";

function NavBar({ dispatch, UserLoginLogout }) {

  const navigate = useNavigate();

	const LogoutHandleSubmit = () => {
		dispatch(UserLogoutHandle());
		navigate("/");
	};

  return (
	<div>
		<div className="navbar">
			<div className="navbar-item navbar-brand" id="navbar">The Poll-utor</div>
			<div className="navbar-item">
				<NavLink to="/" exact="true">
					Dashboard
				</NavLink>
			</div>
			<div className="navbar-item">
				<NavLink to="/leaderboard" exact="true">
					Leaderboard
				</NavLink>
			</div>
			<div className="navbar-item navbar-highlight">
				<NavLink to="/add" exact="true">
					New poll
				</NavLink>
				</div>
		</div>
		<div className="navbar-user">
			<div className="navbar-item">Logged in as: <img src={UserLoginLogout.avatarURL} width="25" valign="middle" alt="img" /> {UserLoginLogout.id}</div>
			<div className="navbar-item navbar-highlight"><a href="#" onClick={LogoutHandleSubmit}>Logout</a></div>
		</div>  
	</div>    
    )
  }

function mapStateToProps({ UserLoginLogout }) {
  return {
    UserLoginLogout,
  };
}

export default connect(mapStateToProps)(NavBar);