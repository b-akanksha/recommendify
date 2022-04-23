/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "../Dashboard/Dashboard";
import MusicBox from "../MusicBox/MusicBox";
const Main = ({ setToken, darkMode }) => {
  const { loading, error, recommendation } = useSelector((state) => state.user);

  if (loading) {
    return (
      <div className="flex-container">
        <MusicBox
          icon="./assets/load.gif"
          title="Loading"
          subTitle="Please wait, while we fetch the data"
          darkMode={darkMode}
          type="load"
        />
      </div>
    );
  }
  if (!loading && error.message) {
    return (
      <div className="flex-container">
        <MusicBox
          icon="./assets/error.gif"
          title="Error"
          subTitle={error.message || "Something went wrong"}
          darkMode={darkMode}
          type="load"
        />
      </div>
    );
  }
  return (
    <>
      {recommendation && recommendation.length && (
        <Dashboard setToken={(e) => setToken(e)} />
      )}
    </>
  );
};

export default Main;
