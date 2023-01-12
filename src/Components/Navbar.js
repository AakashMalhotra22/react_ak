import * as React from 'react';
import PropTypes from 'prop-types';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
//   } from "react-router-dom";

function NavBar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">{props.Home}</Link> */}
          <a className="nav-link active" aria-current="page" href="#">{props.Home}</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li> */}
      </ul>
      <div className={`form-check form-switch text-${props.mode==='dark' ?'light' :'dark'}`}>
        <input className="form-check-input" onClick={props.darkmode} type="checkbox" role="switch" id="dm"/>
        <label className="form-check-label" htmlFor="dm">Enable dark Mode</label>
        </div>

    </div>
  </div>
</nav>
</>
  );
}
NavBar.propTypes={
    title: PropTypes.string.isRequired
}
NavBar.defaultProps ={
    title: "fuck you"
}
export default NavBar;
