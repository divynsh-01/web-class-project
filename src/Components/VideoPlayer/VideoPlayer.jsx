import React, { useRef } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./VideoPlayer.css";
import video from "../../assets/video.mp4";

const VideoPlayer = (props) => {
  const player = useRef(null);
  const videoRef = useRef(null);

  const closePlayer = (event) => {
    if (event.target === player.current) {
      props.setPlayState(false);
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={"video-player " + (props.playState ? "" : "hide")}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay controls loop ref={videoRef}></video>
    </div>
  );
};

// ✅ Add prop validation
VideoPlayer.propTypes = {
  setPlayState: PropTypes.func.isRequired, // Expecting a function
  playState: PropTypes.bool.isRequired, // Expecting a boolean
};

export default VideoPlayer;
