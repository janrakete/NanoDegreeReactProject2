import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function PollsListCard({ Users, PollAuthor, props }) {
  return (
		<div className="container">
			<div className="row">
				<div className="poll-card">

					<h3>Would You Rather ...</h3>
					by <img src={PollAuthor.avatarURL} width="25" valign="middle" alt="img" /> {PollAuthor.id} ({PollAuthor.name})
					<br /><br />
					<Link to={"questions/" + props.poll.id}>
						<button className="button">View poll</button>
					</Link>
				</div>
			</div>
		</div>    
    )
  }

function mapStateToProps({ Users }, props) {

	return {
		PollAuthor : Users[props.poll.author],
		props
	};
}

export default connect(mapStateToProps)(PollsListCard);