import React from "react";

const customButton = function (props) {
  const { buttonColor, buttonText } = props;

  const styles = {
    backgroundColor: buttonColor || 'gray'
  }

  return (
    <>
      <button style={styles}>{buttonText || 'Save'}</button>
      <button style={styles}>{buttonText || 'Save'}</button>
    </>
  );
}

export default customButton;