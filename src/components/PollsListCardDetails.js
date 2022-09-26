import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

import { PollAddAnswerHandle } from "../actions/Polls";

function PollsListCardDetails() {

	const dispatch = useDispatch();
	
	const { UserLoginLogout, Polls, Users } = useSelector(store => store);
	const { question_id } = useParams();

	const Poll = Object.values(Polls).find((question) => question.id === question_id);
	const PollAuthor = Users[Poll.author];

	if (!Poll) {
		return <Navigate to="/404" />;
	}

	const UserVotedForOptionOne = Poll.optionOne.votes.includes(UserLoginLogout.id);
	const UserVotedForOptionTwo = Poll.optionTwo.votes.includes(UserLoginLogout.id);
	const UserVoted = UserVotedForOptionOne || UserVotedForOptionTwo;
	
	let UserVotedFor = "";
	if (UserVoted)
		UserVotedFor = Poll[Users[UserLoginLogout.id].answers[Poll.id]].text;

	const PollHandleOptionSubmit = (event) => {
    	event.preventDefault();
		dispatch(PollAddAnswerHandle(UserLoginLogout, Poll.id, event.target.elements.optionName.value));		
	};

	return (
		<div className="container">
			<br />
			By <img src={PollAuthor.avatarURL} width="25" valign="middle" alt="img" /> {PollAuthor.id} ({PollAuthor.name})
			<h3>Would You Rather ...</h3>
			Answer 1: <span className="bold">{Poll.optionOne.text}</span> (Votes: <span className="highlight">{Poll.optionOne.votes.length}</span>, <span className="highlight">{Math.round(Poll.optionOne.votes.length / (Poll.optionOne.votes.length + Poll.optionTwo.votes.length) * 100)}%</span>) <br /><br />
			OR<br /><br />
			Answer 2: <span className="bold">{Poll.optionTwo.text}</span> (Votes: <span className="highlight">{Poll.optionTwo.votes.length}</span>, <span className="highlight">{Math.round(Poll.optionTwo.votes.length / (Poll.optionOne.votes.length + Poll.optionTwo.votes.length) * 100)}%</span>)<br />
			<br /><br />

			{UserVoted ? (
				<div>Your vote was for: {UserVotedFor} </div>
			) : (
				<div>
				
				<div>Please vote now:</div>
				<div>
					<form onSubmit={PollHandleOptionSubmit}>
						<input type="hidden" value ="optionOne" name="optionName" />
						<div className="row">			
							<input type="submit" value="Vote for answer 1" className="button" />
						</div>
					</form>
				</div>
				<div>
				OR
				</div>
				<div>
					<form onSubmit={PollHandleOptionSubmit}>
						<input type="hidden" value ="optionTwo" name="optionName" />
						<div className="row">			
							<input type="submit" value="Vote for answer 2" className="button" />
						</div>
					</form>
				</div>
				</div>
			)}
			
		</div>
	)
}

export default PollsListCardDetails;