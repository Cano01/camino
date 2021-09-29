import React, { Component } from "react";
import "./Footer.css"


class Footer extends Component{
    render() {
        return (
        
            <footer className="footer">
                <div className="grid-container">
                    <div className="grid-element">
                        
                        This is a project. Part os yerick's portofolio.
                        
                    </div>
                    <div className="grid-element">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.
                    </div>
                    <div className="grid-element">
                        <ul>
                            <li>text</li>
                            <li>text</li>
                            <li>text</li>
                            <li>text</li>
                        </ul>
                    </div>
                    <div className="grid-element">
                        <ul>
                            <li>text</li>
                            <li>text</li>
                            <li>text</li>
                            <li>text</li>
                        </ul>
                    </div>
                </div>
            </footer>

        );
    }
};

export default Footer;