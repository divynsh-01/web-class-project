import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const Card = (props) => {
  return (
    <div className="slide">
      <div className="user-info">
        <img src={props.userImg} alt="User" />
        <div>
          <h3>{props.name}</h3>
          <span>{props.address}</span>
        </div>
      </div>
      <p>{props.text}</p>
    </div>
  );
};

// ✅ Add prop validation
Card.propTypes = {
  userImg: PropTypes.string.isRequired, // Expecting an image URL (string)
  name: PropTypes.string.isRequired, // Expecting a name (string)
  address: PropTypes.string.isRequired, // Expecting an address (string)
  text: PropTypes.string.isRequired, // Expecting text (string)
};

export default Card;
