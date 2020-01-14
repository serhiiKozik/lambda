import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import LambdaListView from "../views/LambdaListView";
import ReferenceListView from "../views/ReferenceListView";
import LambdaPageView from "../views/LambdaPage";
import NoLambdaPageView from "../views/ReferencePage";

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>

    <Route path="/lambda-list">
      <LambdaListView />
    </Route>

    <Route path="/no-lambda-list">
      <ReferenceListView />
    </Route>

    <Route path="/lambda-page">
      <LambdaPageView />
    </Route>

    <Route path="/no-lambda-page">
      <NoLambdaPageView />
    </Route>
  </Switch>
);

export default Routes;
