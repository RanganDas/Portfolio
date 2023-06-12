import React from 'react';
import PropTypes from 'prop-types';

const CurvedLine = ({ color }) => (
  <div className="CurvedLine" style={{ background: `url('data:image/svg+xml,%3Csvg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath fill="${color}" fill-opacity="1" d="M0,160L120,138.7C240,117,480,75,720,96C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"%3E%3C/path%3E%3C/svg%3E')` }}>
    &nbsp;
  </div>
);

CurvedLine.propTypes = {
  color: PropTypes.string.isRequired,
};

export default CurvedLine;
