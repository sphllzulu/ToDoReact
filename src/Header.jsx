

import React, { useState, useEffect } from "react";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Toolbar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export const Header = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ backgroundColor: 'white', border: '1px solid #063970', color: 'black' }}>
        <Toolbar className="nav">
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <AccountCircleIcon style={{ fontSize: "50px" }} />
            <span style={{fontSize:'0.5rem'}}>{email}</span>
          </div>
          <h1 style={{ color: "black" }}>ToDoList</h1>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <LogoutIcon />
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
