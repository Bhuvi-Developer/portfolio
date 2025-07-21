import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="loader">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" height="100px" width="100px" className="spinner">
      <defs>
        <linearGradient id="gradient">
          <stop stopOpacity="1" stopColor="#fe0000" offset="0%" />
          <stop stopOpacity="0" stopColor="#af3dff" offset="100%" />
        </linearGradient>
      </defs>
      <circle stroke="url(#gradient)" r="20" cy="33" cx="33" strokeWidth="1" fill="transparent" className="path"></circle>
    </svg>
  </div>
);

export default Loader; 