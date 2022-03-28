import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div className="bg-primary rounded mx-2" style={{ height: "30px", width: "30px" }} onClick={() => { props.toggleMode("primary") }}></div>
              <div className="bg-secondary rounded mx-2" style={{ height: "30px", width: "30px" }} onClick={() => { props.toggleMode("secondary") }}></div>
              <div className="bg-success rounded mx-2" style={{ height: "30px", width: "30px" }} onClick={() => { props.toggleMode("success") }}></div>
              <div className="bg-danger rounded mx-2" style={{ height: "30px", width: "30px" }} onClick={() => { props.toggleMode("danger") }}></div>
              <div className="bg-warning rounded mx-2" style={{ height: "30px", width: "30px" }} onClick={() => { props.toggleMode("warning") }}></div>
              <div className="bg-info rounded mx-2" style={{ height: "30px", width: "30px" }} onClick={() => { props.toggleMode("info") }}></div>
              <div className="bg-light rounded mx-2" style={{ height: "30px", width: "30px" }} onClick={() => { props.toggleMode("light") }}></div>
              <div className="bg-dark rounded mx-2" style={{ height: "30px", width: "30px" }} onClick={() => { props.toggleMode("dark") }}></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  about: "About",
};
