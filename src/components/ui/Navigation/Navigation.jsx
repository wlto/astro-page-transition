import React from 'react';
import './Navigation.styles.scss';

const Navigation = () => {
  return (
    <ul className="Navigation">
      <li className="Navigation__item">
        <a href="/">Home</a>
      </li>
      <li className="Navigation__item">
        <a href="/test">Test</a>
      </li>
    </ul>
  )
};

export default Navigation;