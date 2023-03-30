import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter2(props) {
  const { defaultCount } = props;
  const [count, setCount] = useState(defaultCount || 0);

  const handleIncrement = function () {
    setCount(prevCount => (prevCount + 1));
  } 

  const handleDecrement = function () {
    setCount(prevCount => (prevCount - 1));
  }

  return (
    <div>
      <h1>Cuenta</h1>
      <p>{count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </div>
  );
}

Counter2.propTypes = {
  defaultCount: PropTypes.number,
}

export default Counter2;