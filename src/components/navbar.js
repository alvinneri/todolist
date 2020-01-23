import React, { Component } from 'react';
import '../css/dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,  } from 'react-router-dom';

class Navbar extends Component {
   
    render() { 
        return ( 
        <Router>
            <div className="container">
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a className="navlinkss" href="/">Home</a></li>
                <li class="breadcrumb-item"><a className="navlinkss" href="/about">About</a></li>
                </ol>
                </nav>
            </div>
        </Router>
         );
    }
}
 
export default Navbar;