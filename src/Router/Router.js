import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AppView from "../components/AppView"
import AppContainer from "../components/AppContainer"
const Router = () => {
  return (
    <BrowserRouter>
      <div>

        <Switch>
          <Route exact path="/" component={AppView} />
          <Route path="/nextPage" component={AppContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
