import React from "react";
import "./css/style.css";

function Navbar() {
    return (
        <div className="row position-absolute top-0 w-100 navCss">
        <nav className="navbar col-md-10 mx-auto col-12 navbar-expand-lg navbar-light bg">
            <div className="container-fluid">
                <a className="navAnchorStyle head" href="/">EsportsIndia</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`}}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navD">
                        <li className="nav-item">
                            <a className="navAnchorStyle navAnchor" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="navAnchorStyle navAnchor" href="/">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="navAnchorStyle navAnchor" href="/">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="navAnchorStyle navAnchor" href="/">Register</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
        </div>
    )
};

export default Navbar;