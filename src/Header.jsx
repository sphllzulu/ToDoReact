import React from "react";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Toolbar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <React.Fragment>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', border: '1px solid #063970',color: 'black' }}>
        <Toolbar className="nav">
          <AccountCircleIcon style={{ fontSize: "50px" }} />
          <h1 style={{color:"black"}}>ToDoList</h1>
          <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
            <LogoutIcon />
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;