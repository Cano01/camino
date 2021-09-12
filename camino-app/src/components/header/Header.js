

import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import './Header.css'

class Header extends Component{

    name(params) {
        console.log("hello world");  
    }

    render() {
        return (
            <div className = "header"> 
                Just some ugly looking header
                <nav>
                    <ul>
                        <li>
                            <Button variant="contained" color="primary" href="/">Home</Button>
                        </li>
                        <li>
                            <Button variant="contained" color="primary" href="/About">About</Button>
                        </li>
                        <li>
                            <Button variant="contained" color="primary" href="/Routes">Routes</Button>
                        </li>
                    </ul>
                </nav>
                
            </div>
        );
    }
};

export default Header;