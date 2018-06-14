import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Dash from "./components/Dashboard";
import Charts from "./components/AreaChart";
import Tables from "./components/DonutChart";
import Profiles from "./components/Profiles";
import Profile from "./components/Profile";
import Marquee from "./components/Marquee";
import Wall from "./components/Wall";
import Settings from "./components/Settings";


import {
  BrowserRouter,
  Route,
  Switch
 } from "react-router-dom";
 

function App() {
  return (
    <div> 
    <BrowserRouter>
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div style={{backgroundColor: "white"}}>
        
         <div>
         <Switch>
            
            <Route path="/charts" component={Charts} />
            <Route path="/tables" component={Tables} />
            <Route path="/settings" component={Settings} />
            <Route path="/wall" component={Wall} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/marquee/:text" component={Marquee} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/" component={Dash} />
            
         </Switch>
         </div>
       
        </div>
      </div>
      </BrowserRouter>
    </div>

  );
}


export default App;
