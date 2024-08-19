import React from 'react'
import logo from "../assets/logo.svg"
import "../App.css"

function Footer() {
  return (
    <div id='footer'> 
      <div className='items'>
      <div>
        <h3>Abstract</h3>
        <ul>
          <li><a href="">Branches</a></li>
        </ul>
      </div>
      <div>
        <h3>Resources</h3>
        <ul>
          <li><a href="">Blog</a></li>
          <li><a href="">Help Center</a></li>
          <li><a href="Release Notes"></a></li>
          <li><a href="">Status</a></li>
        </ul>
      </div>
      <div>
        <h3>Community</h3>
        <ul>
          <li><a href="">Twitter</a></li>
          <li><a href="">LinkedIn</a></li>
          <li><a href="">Facebook</a></li>
          <li><a href="">Dribble</a></li>
          <li><a href="">Podcast</a></li>
        </ul>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li><a href="">About us</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Legal</a></li>
        </ul>
      </div>
      <div>
        <h3>Contact Us</h3>
        <ul>
          <li>info@abstract.com</li>
        </ul>
      </div>
      </div>
      <div className='copyright'>
        <p>&copy; Copyright 2022. Abstract Studio Design,Inc. All right reserved</p>
      </div>
    </div>
  )
}

export default Footer