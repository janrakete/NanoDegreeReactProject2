import React from "react";

import PollsList from "./PollsList";

function Dashboard() {

  return (
		<div className="container">
			<div className="row">
				<h1>Dashboard</h1>
			</div>

			<div className="row">
				<h2>Unanswered polls</h2>
				<PollsList category="unanswered" />
			</div>
			<div className="row">
				<h2>Answered polls</h2>
				<PollsList category="answered" />
			</div>

		</div>    
    )
  }

export default Dashboard;