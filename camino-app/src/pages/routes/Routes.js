import React, { Component } from "react";

class Routes extends Component{

    foo(props){
        this.document.getElementById("1").innerHTML = "hola mundo";
    }

    render() {
        return (
            <div> 
                <p id="1"></p>
                All routes will be loaded
                
            </div>
        );
    }
};

export default Routes;