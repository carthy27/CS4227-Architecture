import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Profile.css';

const Navbar = () =>{
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">SkillSwap</Link>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/">Profile</Link>
        <Link to="/">Skills</Link>
        <Link to="/">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
