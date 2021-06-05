import './style/main.css';
import './style/style.css';
import {Route, Switch} from "react-router-dom";

import Header from "./components/header"
import CtaCon from "./components/ctas"


import HomePage from "./pages/home"
import FormationPage from "./pages/formations";
import AboutPage from "./pages/about";
import FaqPage from "./pages/faq";
import ContactPage from "./pages/contact";

// PORTAL
import {LoginPage,SignUppage} from "./pages/portal/authenticate"
// import DashboardEtudiant from "./pages/portal/dashboardEtudiant"
// import Dashboard from "./pages/portal/dashboard"
import { Component } from 'react';
import DashboardEtudiant from './pages/portal/dashboardEtudiant';

class App extends Component{


  render(){
    return (
      <div className="App">
        <Header/> 
        <CtaCon/>

        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/formation" component={FormationPage}></Route>
          <Route exact path="/faq" component={FaqPage}></Route>
          <Route exact path="/contact" component={ContactPage}></Route>
          
          
          
          <Route exact path="/portal/signup" component={SignUppage}></Route>
          <Route exact path="/portal/login" component={LoginPage}></Route>
          <Route exact path="/portal/dashboard/etudiant" component={DashboardEtudiant}></Route>

          
        </Switch>
      </div>
    )
  }
}

export default App;
