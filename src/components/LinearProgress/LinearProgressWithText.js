import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import "../../App.css";

const LinearProgressWithText = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} className="progress" />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="heading4">{props.title}</Typography>
      </Box>
    </Box>
  );
};

export default LinearProgressWithText;
