import React, { Component } from "react";
import { Button } from "./../essentials/buttons";
import './Header.css'


class Header extends Component{    
    
    render() {
        return (
            <div className = "header"> 
                Just some ugly looking header
                <nav>
                    <ul className="hul">
                        <li className="hli">
                            <Button path="/Home" text="Home"/>
                        </li>
                        <li className="hli">
                            <Button path="/Routes" text="Routes"/>
                        </li>
                        <li className="hli">
                            <Button path="/About" text="About"/>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
};

export default Header;