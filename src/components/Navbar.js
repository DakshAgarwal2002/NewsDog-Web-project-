
import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
const Navbar=()=>{

    return (
      <div>
        <nav className="bg-dark fixed-top navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/" style={{color:"white"}}>News Dog</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{color:"white"}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/" style={{color:"white"}}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" style={{color:"white"}}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/bussiness" style={{color:"white"}}>Bussiness</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/entertainment" style={{color:"white"}}>Entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/general" style={{color:"white"}}>General</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/health" style={{color:"white"}}>Health</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/science" style={{color:"white"}}>Science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/story" style={{color:"white"}}>Story</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/technology" style={{color:"white"}}>Technology</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
}

export default Navbar