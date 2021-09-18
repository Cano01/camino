import React, { Component } from "react";
import { useHistory } from 'react-router-dom'
import './Header.css'

function HomeButton(path, text) {
    const history = useHistory();
    function handle(){
        history.push(path);
    }
    return(
        <button onClick={handle}>
            {text}
        </button>
    );
}

function Button({path, text}) {
    const history = useHistory();
    function handle(){
        history.push(path);
    }
    return(
        <button onClick={handle}>
            {text}
        </button>
    );
}

function AboutButton() {
    const history = useHistory();
    function handle(){history.push("/About");}
    return(<button onClick={handle}>About</button>);
}

function RoutesButton() {
    const history = useHistory();
    function handle(){history.push("/Routes");}
    return(<button onClick={handle}>Routes</button>);
}
class Example extends Component{
    render(){
        return(
            <div>
                <HomeButton path="path/..."></HomeButton>
            </div>
        );
    }
}

class Header extends Component{    
    
    render() {
        return (
            <div className = "header"> 
                Just some ugly looking header
                <nav>
                    <ul>
                        <li>
                            <Button path="/" text="Home"/>
                        </li>
                        <li>
                            <Button path="/Routes" text="Routes"/>
                        </li>
                        <li>
                            <Button path="/About" text="About"/>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
};

export default Header;