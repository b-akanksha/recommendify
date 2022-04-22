/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "../Dashboard/Dashboard";
const Main = ({ setToken }) => {
  const { loading, error, userDetails, recommendation } = useSelector(
    (state) => state.user
  );

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  if (loading) {
    return (
      <center>
        <img src="./assets/load.gif" alt="load" />
        <p>Loading..</p>
      </center>
    );
  }
  if (!loading && error.message) {
    return (
      <center>
        <img src="./assets/error.gif" alt="load" />
        <p>{error.message}</p>
      </center>
    );
  }
  return (
    <>
      {recommendation && recommendation.length && <Dashboard />}
      <p>
        {userDetails.display_name}
        <button className="App-link" onClick={logout}>
          Logout
        </button>
      </p>
    </>
  );
};

export default Main;
