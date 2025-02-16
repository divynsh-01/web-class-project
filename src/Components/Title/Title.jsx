import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./Title.css";

const Title = (props) => {
  return (
    <div className="title">
      <p>{props.heading}</p>
      <h2>{props.subheading}</h2>
    </div>
  );
};

// ✅ Add prop validation
Title.propTypes = {
  heading: PropTypes.string.isRequired, // Expecting a string
  subheading: PropTypes.string.isRequired, // Expecting a string
};

export default Title;
