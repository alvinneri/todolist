import React, { Component } from 'react';
import '../css/dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,  } from 'react-router-dom';

class About extends Component {
    
    render() { 
        return ( 
            <div className="container mt-5 mx-auto">
                <h1>WHAT'S UP?</h1>
                <p>This application was created using React. The purpose of this application is to keep track <br/>
                 on the things you need to do. The database of the application is just localstorage. <br/>
                 Closing your browser wont delete the data. <br/>

                 You can get the code at this github repository <a target="_blank" href='https://github.com/alvinneri/todolist'>CLICK HERE.</a>
                </p>
                <p>Contact me through this email if you want help: alvin.neri.ece@gmail.com</p>
                <p>Mobile phone: +639171257816</p>
                <a href='/' className="btn btn-light btncustom" >GO BACK</a>
            </div>
         );
    }
}
 
export default About;