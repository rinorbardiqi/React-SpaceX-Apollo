import { AppBar,Toolbar,Box } from "@mui/material";
import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function Navbar({children}) {
  return (
    <div>
    <AppBar position="fixed" style={{backgroundColor:"#1A2027"}} >
    <Link  to="/home">
    <Toolbar style={{justifyContent:"center"}}>
        <Box
            component="img"
            sx={{
            height: 30,
            }}
            alt="Your logo."
            src={logo}
        />
    </Toolbar>
    </Link>  
    </AppBar>
    {children}
    </div>
  )
}

export default Navbar