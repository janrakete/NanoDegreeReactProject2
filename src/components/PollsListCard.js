import React from "react";
import { connect } from "react-redux";

function PollsListCard({ pollAuthor, props }) {
  return (
		<div className="container">
			<div className="row">
				<div className="poll-card">

					<h3>Would You Rather ...</h3>
					by <img src={pollAuthor.avatarURL} width="25" valign="middle"/> {pollAuthor.id} ({pollAuthor.name})
					<br /><br />
					<button className="button">View poll</button>
				</div>
			</div>
		</div>    
    )
  }

function mapStateToProps({ UsersReceive }, props) {

	return {
		pollAuthor : UsersReceive[props.poll.author],
		props
	};
}

export default connect(mapStateToProps)(PollsListCard);