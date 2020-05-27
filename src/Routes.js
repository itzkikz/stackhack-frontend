import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Registration from "./Registration/Registration";
import Preview from "./Preview/Preview";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Registration} />
        <Route path="/preview" exact component={Preview} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
