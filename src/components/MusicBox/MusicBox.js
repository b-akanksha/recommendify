import { Slider } from "@mui/material";
import React from "react";
import FastRewindOutlinedIcon from "@mui/icons-material/FastRewindOutlined";
import PauseCircleOutlinedIcon from "@mui/icons-material/PauseCircleOutlined";
import FastForwardOutlinedIcon from "@mui/icons-material/FastForwardOutlined";

const MusicBox = ({ icon, title, subTitle, darkMode, type }) => {
  return (
    <div className={`${type === "load" ? "load-div" : "start-div"}`}>
      <img src={icon} alt="start" className="start-icon" />
      <h3 className="styled-h">{title}</h3>
      <p className="styled-h">{subTitle}</p>
      <Slider
        aria-label="slider"
        value={20}
        size="small"
        className={`slider ${darkMode && "slider-dark"}`}
      />
      <div className="flex-container icons-div">
        <FastRewindOutlinedIcon className="icon" />
        <PauseCircleOutlinedIcon className="icon" />
        <FastForwardOutlinedIcon className="icon" />
      </div>
    </div>
  );
};

export default MusicBox;
