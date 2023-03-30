import React from "react";
import PropTypes from 'prop-types';

const customText = function (props) {
  const { textType, textColor } = props;

  const styles = {
    color: textColor
  }

  if (textType === 'text') {
    return <p style={styles}>{props.children}</p>
  }
  
  return <h1 style={styles}>{props.children}</h1>
}

customText.propTypes = {
  textType: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired
}

export default customText;