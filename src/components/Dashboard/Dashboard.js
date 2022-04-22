/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { recommendation } = useSelector((state) => state.user);

  return (
    <div>
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
          />
        ))}
    </div>
  );
};

export default Dashboard;
