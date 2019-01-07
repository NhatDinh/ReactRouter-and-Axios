import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import components
import Main from "./components/Main.js";
import SavedRecipes from "./components/SavedRecipes.js";
import AddARecipe from "./components/AddARecipe.js";
import HomePageHeader from "./components/HomePageHeader.js";
import Error from "./components/Error.js";


import "./App.css"; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
      <HomePageHeader component={HomePageHeader} />
        <Switch>
          <Route path="/" component={Main} exact />
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
