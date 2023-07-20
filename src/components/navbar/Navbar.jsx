
import React from 'react';
import { AiOutlineHome, AiOutlineSearch, AiOutlineNotification, AiOutlineUser, AiFillWallet, AiFillNotification, AiFillSetting } from 'react-icons/ai';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home"><AiFillWallet /></a>
      <a href="#search"><AiOutlineSearch /></a>
      <a href="#notifications"><AiFillNotification /></a>
      <a href="#profile"><AiFillSetting /></a>
    </div>
  );
};

export default Navbar;
