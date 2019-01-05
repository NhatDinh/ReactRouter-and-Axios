import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import components
import Home from "./components/Home.js";
import SavedRecipes from "./components/SavedRecipes.js";
import AddARecipe from "./components/AddARecipe.js";
import NavBar from "./components/NavBar.js";
import Error from "./components/Error.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <NavBar component={NavBar}/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/savedrecipes" component={SavedRecipes} />
          <Route path="/addarecipe" component={AddARecipe} />
          <Route path="" component={Error} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;