import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const Card = (props) => {
  return (
    <div className="program">
      <img src={props.programSrc} alt={props.caption} />
      <div className="caption">
        <img src={props.iconSrc} alt="Icon" />
        <p>{props.caption}</p>
      </div>
    </div>
  );
};

// ✅ Add prop validation
Card.propTypes = {
  programSrc: PropTypes.string.isRequired, // Expecting an image URL (string)
  caption: PropTypes.string.isRequired, // Expecting text (string)
  iconSrc: PropTypes.string.isRequired, // Expecting an image URL (string)
};

export default Card;
