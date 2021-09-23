import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Routes from './pages/routes/Routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import React, { Component } from "react";

class Router extends Component{

    render() {
        return (
            <div> 
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path="/Home" component={ Home }/>
                        <Route path="/About"  component={ About }/>
                        <Route path="/Routes" component={ Routes }/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
};

export default Router;
        