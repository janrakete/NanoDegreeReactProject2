import React from "react";

import PollsList from "./PollsList";

function Dashboard() {

  return (
		<div className="container">

			<div className="tabbed">
			   <input defaultChecked id="unanswered" type="radio" name="tabs" />
			   <input id="answered" type="radio" name="tabs" />

			   <nav>
			      <label htmlFor="unanswered">Unanswered polls</label>
			      <label htmlFor="answered">Answered polls</label>
			   </nav>
			   
			   <figure>
			      <div className="unanswered">
			      	<PollsList category="unanswered" />
			      </div>
			      <div className="answered">
			      	<PollsList category="answered" />	
			      </div>
			   </figure>

			</div>
		</div>    
    )
  }

export default Dashboard;