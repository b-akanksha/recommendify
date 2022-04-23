/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecommendationThunk } from "../../redux/thunks";
import LinearProgressWithText from "../LinearProgress/LinearProgressWithText";

const Dashboard = ({ setToken }) => {
  const { recommendation, darkMode, analysis } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const handleAgain = () => dispatch(getRecommendationThunk());

  return (
    <div className="flex-col-container">
      <div className="flex-container icons-div">
        <fieldset>
          <legend>
            <h3>Your Metrics</h3>
          </legend>
          <div className="flex-metrics-container">
            <LinearProgressWithText
              title="Danceability"
              value={analysis.danceability * 100}
            />
          </div>
          <div className="flex-metrics-container">
            <LinearProgressWithText
              title="Energy"
              value={analysis.energy * 100}
            />
          </div>
          <div className="flex-metrics-container">
            <LinearProgressWithText
              title="Acousticness"
              value={analysis.acousticness * 100}
            />
          </div>
        </fieldset>
      </div>
      <div className="flex-container icons-div">
        <fieldset>
          <legend>
            <h3>Top 12 Recommendation</h3>
          </legend>
          <div className="mobile-view-rec">
            {recommendation &&
              recommendation.map((track) => (
                <iframe
                  src={`https://open.spotify.com/embed/track/${track.id}`}
                  width="250"
                  height="80"
                  key={track.id}
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                  className="flex-iframe-container"
                />
              ))}
          </div>
        </fieldset>
      </div>
      <div>
        <button
          className={`button ${darkMode && "button-dark"}`}
          onClick={logout}
        >
          Logout
        </button>
        <button
          className={`button ${darkMode && "button-dark"}`}
          onClick={handleAgain}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
