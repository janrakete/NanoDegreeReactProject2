import "./App.css";

import { React, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from 'react-redux-loading-bar';

import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Leaderboard from "./components/Leaderboard";
import PollNew from "./components/PollNew";
import FourZeroFour from "./components/FourZeroFour";
import Dashboard from "./components/Dashboard";
import PollsListCardDetails from "./components/PollsListCardDetails";

import { InitialDataGet } from "./actions/InitialData";

function App({ dispatch, UserLoginLogout }) {

  useEffect(() => {
      dispatch(InitialDataGet());
  });

  return (
      <div className="app">
      <LoadingBar />
      { 
        (
          UserLoginLogout === null || (UserLoginLogout === "error-unknown-user") ? (
          <Login />
          ) : (
          <div>
            <NavBar UserLoginLogout={UserLoginLogout} />
            <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/add" element={<PollNew />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/questions/:question_id" exact element={<PollsListCardDetails />} />
                <Route path="/404" exact element={<FourZeroFour />} />
            </Routes>
          </div>
        )
      )}
      </div>
    )
  }

function mapStateToProps({ UserLoginLogout}) {
  return {
    UserLoginLogout,
  };
}

export default connect(mapStateToProps)(App);