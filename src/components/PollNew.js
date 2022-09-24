import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PollAddQuestionHandle } from "../actions/Polls";

function PollNew({ dispatch, UserLoginLogout }) {

	const navigate = useNavigate();

  const PollHandleSubmit = (event) => {
    event.preventDefault();
    dispatch(PollAddQuestionHandle(UserLoginLogout, event.target.elements.option1.value, event.target.elements.option2.value));
    navigate("/");
  };

  return (
		<div className="container">
			<div className="row">
				<h1>New poll</h1>
				<h2>Would You Rather ...</h2>
			</div>
			<form onSubmit={PollHandleSubmit}>
				<div className="row">			
					<input type="text" placeholder="Option 1" name="option1" required />
				</div>
				<div className="row">			
					<h2>OR</h2>
				</div>
				<div className="row">			
					<input type="text" placeholder="Option 2" name="option2" required />
				</div>
				<div className="row">			
					<input type="submit" value="Submit new poll" className="button" />
				</div>
			</form>
		</div>    
    )
  }

const mapStateToProps = ({ UserLoginLogout }) => ({
	UserLoginLogout
});

export default connect(mapStateToProps)(PollNew);