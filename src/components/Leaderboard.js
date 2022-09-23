import React from "react";
import { connect } from "react-redux";

function Leaderboard({ Users }) {

  return (
		<div className="container">
			<div className="row">
				<h1>Leaderboard</h1>
			</div>
			<div className="table">
				<div className="table-row">
					<div className="table-cell table-head">
					User
					</div>
					<div className="table-cell table-head">
					Asked questions
					</div>
					<div className="table-cell table-head">
					Answered questions
					</div>
				</div>
 				{Users.map((user) => (
					<div className="table-row" key={user.id}>
						<div className="table-cell">
						<img src={user.avatarURL} width="25" valign="middle" alt="img" /> {user.id} ({user.name})
						</div>
						<div className="table-cell">
							{user.questions.length}
						</div>
						<div className="table-cell">
							{Object.keys(user.answers).length}
						</div>
					</div>
        ))}
			</div>
		</div>    
    )
  }

function mapStateToProps({ Users }) {
  return {
    Users: Object.values(Users).sort((a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length),
  };
}

export default connect(mapStateToProps)(Leaderboard);