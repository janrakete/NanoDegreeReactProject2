import React from "react";
import { connect } from "react-redux";

import PollsListCard from "./PollsListCard";

function PollsList({ Polls, UserLoginLogout, props}) {
	return (
		<div className="container">
			{Polls.map((poll) => (
				<div className="row" key={poll.id}>
					<PollsListCard poll={poll} />
				</div>
				))}
		</div>    
	)
}

function mapStateToProps({ Polls, UserLoginLogout }, props) {

	let PollsAll = Object.values(Polls);
	let UserLoggedInAnswers = UserLoginLogout ? Object.keys(UserLoginLogout.answers) : []

	if (props.category == "unanswered")
		Polls = PollsAll.filter((poll) => !UserLoggedInAnswers.includes(poll.id)).sort((a, b) => b.timestamp - a.timestamp);
	else
		Polls = PollsAll.filter((poll) => UserLoggedInAnswers.includes(poll.id)).sort((a, b) => b.timestamp - a.timestamp);

	return {
		Polls,
		UserLoginLogout,
		props
	};
}

export default connect(mapStateToProps)(PollsList);