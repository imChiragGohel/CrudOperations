//import React, { Component } from 'react';
import React from 'react';

//Stateless Functional Components Short cusrt key for create 'sfc'

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Counter App <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
        </nav>
    );
};

// class NavBar extends Component {
//     render() {
//     }
// }

export default NavBar;