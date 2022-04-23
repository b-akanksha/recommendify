import React from "react";
import { scopes } from "../../util/scopes";
import start from "../../assets/start.jpg";
import MusicBox from "../MusicBox/MusicBox";

const OpeningPage = ({ darkMode }) => {
  return (
    <div className="flex-container">
      <div className="flex-item flex-1">
        <MusicBox
          icon={start}
          title="Recommendify"
          subTitle="Where words fail, music wins."
          darkMode={darkMode}
          type="not-load"
        />
      </div>
      <div className="flex-item flex-container">
        <div className="start-div-text">
          <h1 className="styled-tagline">
            Hey! Do you want to listen to new music based on your previous
            listens? This tool is for you. <div>Enjoy!</div>
          </h1>
          <div style={{ height: "20px" }} />
          <a
            className={`button ${darkMode && "button-dark"}`}
            href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${
              process.env.REACT_APP_CLIENT_ID
            }&redirect_uri=${
              process.env.NODE_ENV === "development"
                ? process.env.REACT_APP_LOCAL_REDIRECT_URI
                : process.env.REACT_APP_PROD_REDIRECT_URI
            }&response_type=${
              process.env.REACT_APP_RESPONSE_TYPE
            }&scope=${scopes.join("%20")}&show_dialog=true`}
          >
            Login to Spotify
          </a>
        </div>
      </div>
    </div>
  );
};

export default OpeningPage;
