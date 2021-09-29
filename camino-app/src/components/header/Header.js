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
                            <Button path="/" text="Artists"/>
                        </li>
                        <li className="hli">
                            <Button path="/Routes" text="Loved"/>
                        </li>
                        <li className="hli">
                            <Button path="/About" text="Cards"/>
                        </li>
                        <li className="hli">
                            <Button text="Glass"/>
                        </li>
                        <li className="hli">
                            <Button text="About"/>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
};

export default Header;