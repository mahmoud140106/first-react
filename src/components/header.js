import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const[show,setshow]=useState(true)
  const mode=()=>{
    setshow(!show)
    // document.body.classList.toggle('light');
    if(window.localStorage.getItem("mode")==="light"){
      document.body.classList.add('light');
      window.localStorage.setItem("mode", "dark")
      console.log(localStorage.getItem('mode'))
    }
    else if(window.localStorage.getItem("mode")==="dark"){
      document.body.classList.remove('light');
      window.localStorage.setItem("mode", "light")
      console.log(localStorage.getItem('mode'))
    }
  }

  if (window.localStorage.getItem("mode")) {
    document.body.classList=localStorage.getItem("mode");
  }
  else{
    window.localStorage.setItem("mode", "dark")
  }  
  const  menuhandler=()=>{
    document.querySelector('#menu-bar').classList.toggle('fa-times')
    document.querySelector('.navbar').classList.toggle('active')
  }
  window.onscroll =()=>{
    document.querySelector('#menu-bar').classList.remove('fa-times');
    document.querySelector('.navbar').classList.remove('active');
  }
  return (
    <>
        <header>
            <div>
            <a href="index.html" className="logo"><img src="./img/logo.jpg" alt="" /></a>
            </div>
            <div id="icon" onClick={mode}>
            {show?<i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </div>
            <nav className="navbar">
                <NavLink to="/Residencies">Residencies</NavLink>
                <NavLink to="/Our-Value">Our Value</NavLink>
                <NavLink to="/Contact-us">Contact Us</NavLink>
                <NavLink to="/Get-Started">Get Started</NavLink>
                <NavLink to="/">contact</NavLink>
            </nav>
            <div id="menu-bar" className="fas fa-bars" onClick={menuhandler}></div>
        </header>
    </>
  );
}

export default Header;
