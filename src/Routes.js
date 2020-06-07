import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Base from "./Core/Base";
import Preview from "./Preview/Preview";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Base} />
        <Route path="/admin" exact component={Preview} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
