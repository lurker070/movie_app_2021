import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/home";
import Detail from "./routes/Detail";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/movie/:id" component={Detail}/>
      <Route render={() => <Redirect to={{pathname: "/"}} />} />
    </HashRouter>
  );
}

export default App;