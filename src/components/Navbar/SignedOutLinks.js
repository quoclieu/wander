import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/">wander</Link>
      </li>
      <li className="right borders">
        <Link to="/">Login</Link>
      </li>
      <li className="right">
        <Link to="/">Sign Up</Link>
      </li>
    </ul>
  );
};

export default SignedInLinks;
