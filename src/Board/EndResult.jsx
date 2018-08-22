import React from 'react';
import { PropTypes } from 'prop-types';

console.log(this)

const EndResult = ({ color, shape }) => (
  <div className="resultsDiv">
    <div
      style={{ backgroundColor: color }}
      className="resultColor"
    />
    <div className={`resultShape result--${shape}`} />
  </div>
);

EndResult.propTypes = {
  color: PropTypes.string.isRequired,
  shape: PropTypes.string.isRequired,
};

export default EndResult;
