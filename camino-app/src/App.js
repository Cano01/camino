import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Header from './components/header/Header.js';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Routes from './pages/routes/Routes';

function App() {
  return (
    <div className="App">
        <Header/>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/About"  component={ About }/>
            <Route path="/Routes" component={ Routes }/>
          </Switch>
        </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
