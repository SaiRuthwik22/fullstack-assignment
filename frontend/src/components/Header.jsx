import React from 'react'
import logo from "../assets/logo.svg"
import "../App.css"
import {NavLink} from "react-router-dom"

function Header() {
  return (
    <div id='header'>
      <div className='logo-container'>
        <img src={logo} alt="" className='image' />
        <h4 style={{padding:"5px"}}>Abstract</h4>
        <p> | Help Center</p>
      </div>
      <NavLink to="submit">Submit a request</NavLink>
    </div>
  )
}

export default Header
