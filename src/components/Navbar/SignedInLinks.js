import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="signed-in">
      <li className="right">
        <Link to="/">Log Out</Link>
      </li>
      <li>
        <Link to="/">wander</Link>
      </li>
      <li className="right">
        <Link to="/">Help</Link>
      </li>
      <li className="right">
        <Link to="/">Profile</Link>
      </li>
    </ul>
  );
};

export default SignedInLinks;
