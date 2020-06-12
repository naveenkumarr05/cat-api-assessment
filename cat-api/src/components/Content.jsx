import React from "react";
import { Route, Redirect } from "react-router-dom";
import RandomCat from "./RandomCat";
import CatFullDetails from "./CatFullDetails";

export default function Content() {
  return (
    <div className="content">
      <Route path="/" exact render={() => <Redirect to="/randomcat" />} />
      <Route path="/randomcat/" component={RandomCat} />
      <Route path="/catfulldetails/" component={CatFullDetails} />
    </div>
  );
}
